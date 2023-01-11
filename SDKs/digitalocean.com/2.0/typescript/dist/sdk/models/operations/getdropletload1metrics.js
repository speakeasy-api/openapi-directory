"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDropletLoad1MetricsResponse = exports.GetDropletLoad1MetricsRequest = exports.GetDropletLoad1Metrics401ApplicationJson = exports.GetDropletLoad1Metrics200ApplicationJson = exports.GetDropletLoad1Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad1Metrics200ApplicationJsonData = exports.GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad1Metrics200ApplicationJsonDataResult = exports.GetDropletLoad1MetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletLoad1MetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletLoad1MetricsQueryParams, _super);
    function GetDropletLoad1MetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletLoad1MetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad1MetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletLoad1MetricsQueryParams.prototype, "start", void 0);
    return GetDropletLoad1MetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1MetricsQueryParams = GetDropletLoad1MetricsQueryParams;
var GetDropletLoad1Metrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletLoad1Metrics200ApplicationJsonDataResult, _super);
    function GetDropletLoad1Metrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletLoad1Metrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletLoad1Metrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletLoad1Metrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1Metrics200ApplicationJsonDataResult = GetDropletLoad1Metrics200ApplicationJsonDataResult;
var GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletLoad1Metrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletLoad1Metrics200ApplicationJsonData, _super);
    function GetDropletLoad1Metrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletLoad1Metrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletLoad1Metrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletLoad1Metrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletLoad1Metrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1Metrics200ApplicationJsonData = GetDropletLoad1Metrics200ApplicationJsonData;
var GetDropletLoad1Metrics200ApplicationJsonStatusEnum;
(function (GetDropletLoad1Metrics200ApplicationJsonStatusEnum) {
    GetDropletLoad1Metrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletLoad1Metrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletLoad1Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad1Metrics200ApplicationJsonStatusEnum || (exports.GetDropletLoad1Metrics200ApplicationJsonStatusEnum = {}));
var GetDropletLoad1Metrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad1Metrics200ApplicationJson, _super);
    function GetDropletLoad1Metrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletLoad1Metrics200ApplicationJsonData)
    ], GetDropletLoad1Metrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletLoad1Metrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletLoad1Metrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1Metrics200ApplicationJson = GetDropletLoad1Metrics200ApplicationJson;
var GetDropletLoad1Metrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad1Metrics401ApplicationJson, _super);
    function GetDropletLoad1Metrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletLoad1Metrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletLoad1Metrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad1Metrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletLoad1Metrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1Metrics401ApplicationJson = GetDropletLoad1Metrics401ApplicationJson;
var GetDropletLoad1MetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletLoad1MetricsRequest, _super);
    function GetDropletLoad1MetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad1MetricsQueryParams)
    ], GetDropletLoad1MetricsRequest.prototype, "queryParams", void 0);
    return GetDropletLoad1MetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1MetricsRequest = GetDropletLoad1MetricsRequest;
var GetDropletLoad1MetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletLoad1MetricsResponse, _super);
    function GetDropletLoad1MetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletLoad1MetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletLoad1MetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletLoad1MetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad1Metrics200ApplicationJson)
    ], GetDropletLoad1MetricsResponse.prototype, "getDropletLoad1Metrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad1Metrics401ApplicationJson)
    ], GetDropletLoad1MetricsResponse.prototype, "getDropletLoad1Metrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletLoad1MetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletLoad1MetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad1MetricsResponse = GetDropletLoad1MetricsResponse;
