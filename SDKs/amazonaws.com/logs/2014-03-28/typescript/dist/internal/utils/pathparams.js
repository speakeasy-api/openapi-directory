"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamDecorator = exports.getSimplePathParams = exports.ppMetadataKey = void 0;
var utils_1 = require("./utils");
var utils_2 = require("./utils");
exports.ppMetadataKey = "pathParam";
function getSimplePathParams(paramName, paramValue, explode) {
    var pathParams = new Map();
    var ppVals = [];
    if (Array.isArray(paramValue)) {
        paramValue.forEach(function (param) {
            ppVals.push(String(param));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else if ((0, utils_2.isStringRecord)(paramValue) || (0, utils_2.isNumberRecord)(paramValue) || (0, utils_2.isBooleanRecord)(paramValue)) {
        Object.getOwnPropertyNames(paramValue).forEach(function (paramKey) {
            if (explode)
                ppVals.push("".concat(paramKey, "=").concat(paramValue[paramKey]));
            else
                ppVals.push("".concat(paramKey, ",").concat(paramValue[paramKey]));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else if (paramValue instanceof Object) {
        Object.getOwnPropertyNames(paramValue).forEach(function (paramKey) {
            var ppAnn = Reflect.getMetadata(exports.ppMetadataKey, paramValue, paramKey);
            if (ppAnn == null)
                return;
            var ppDecorator = (0, utils_1.parseParamDecorator)(ppAnn, paramKey, "simple", explode);
            if (ppDecorator == null)
                return;
            var paramFieldValue = paramValue[paramKey];
            if ((0, utils_2.isEmpty)(paramFieldValue))
                return;
            else if (explode)
                ppVals.push("".concat(ppDecorator.ParamName, "=").concat(paramFieldValue));
            else
                ppVals.push("".concat(ppDecorator.ParamName, ",").concat(paramFieldValue));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else {
        pathParams.set(paramName, String(paramValue));
    }
    return pathParams;
}
exports.getSimplePathParams = getSimplePathParams;
var ParamDecorator = /** @class */ (function () {
    function ParamDecorator(Style, Explode, ParamName, Serialization) {
        this.Style = Style;
        this.Explode = Explode;
        this.ParamName = ParamName;
        this.Serialization = Serialization;
    }
    return ParamDecorator;
}());
exports.ParamDecorator = ParamDecorator;
