"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateTypeEnum = void 0;
var PredicateTypeEnum;
(function (PredicateTypeEnum) {
    PredicateTypeEnum["IpMatch"] = "IPMatch";
    PredicateTypeEnum["ByteMatch"] = "ByteMatch";
    PredicateTypeEnum["SqlInjectionMatch"] = "SqlInjectionMatch";
    PredicateTypeEnum["GeoMatch"] = "GeoMatch";
    PredicateTypeEnum["SizeConstraint"] = "SizeConstraint";
    PredicateTypeEnum["XssMatch"] = "XssMatch";
    PredicateTypeEnum["RegexMatch"] = "RegexMatch";
})(PredicateTypeEnum = exports.PredicateTypeEnum || (exports.PredicateTypeEnum = {}));
