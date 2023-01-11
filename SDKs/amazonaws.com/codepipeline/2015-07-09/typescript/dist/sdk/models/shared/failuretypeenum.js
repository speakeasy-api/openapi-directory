"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailureTypeEnum = void 0;
var FailureTypeEnum;
(function (FailureTypeEnum) {
    FailureTypeEnum["JobFailed"] = "JobFailed";
    FailureTypeEnum["ConfigurationError"] = "ConfigurationError";
    FailureTypeEnum["PermissionError"] = "PermissionError";
    FailureTypeEnum["RevisionOutOfSync"] = "RevisionOutOfSync";
    FailureTypeEnum["RevisionUnavailable"] = "RevisionUnavailable";
    FailureTypeEnum["SystemUnavailable"] = "SystemUnavailable";
})(FailureTypeEnum = exports.FailureTypeEnum || (exports.FailureTypeEnum = {}));
