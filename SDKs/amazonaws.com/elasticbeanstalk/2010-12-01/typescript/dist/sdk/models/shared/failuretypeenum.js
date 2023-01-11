"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailureTypeEnum = void 0;
var FailureTypeEnum;
(function (FailureTypeEnum) {
    FailureTypeEnum["UpdateCancelled"] = "UpdateCancelled";
    FailureTypeEnum["CancellationFailed"] = "CancellationFailed";
    FailureTypeEnum["RollbackFailed"] = "RollbackFailed";
    FailureTypeEnum["RollbackSuccessful"] = "RollbackSuccessful";
    FailureTypeEnum["InternalFailure"] = "InternalFailure";
    FailureTypeEnum["InvalidEnvironmentState"] = "InvalidEnvironmentState";
    FailureTypeEnum["PermissionsError"] = "PermissionsError";
})(FailureTypeEnum = exports.FailureTypeEnum || (exports.FailureTypeEnum = {}));
