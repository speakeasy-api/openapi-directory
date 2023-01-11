"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetHealthReasonEnumEnum = void 0;
var TargetHealthReasonEnumEnum;
(function (TargetHealthReasonEnumEnum) {
    TargetHealthReasonEnumEnum["ElbRegistrationInProgress"] = "Elb.RegistrationInProgress";
    TargetHealthReasonEnumEnum["ElbInitialHealthChecking"] = "Elb.InitialHealthChecking";
    TargetHealthReasonEnumEnum["TargetResponseCodeMismatch"] = "Target.ResponseCodeMismatch";
    TargetHealthReasonEnumEnum["TargetTimeout"] = "Target.Timeout";
    TargetHealthReasonEnumEnum["TargetFailedHealthChecks"] = "Target.FailedHealthChecks";
    TargetHealthReasonEnumEnum["TargetNotRegistered"] = "Target.NotRegistered";
    TargetHealthReasonEnumEnum["TargetNotInUse"] = "Target.NotInUse";
    TargetHealthReasonEnumEnum["TargetDeregistrationInProgress"] = "Target.DeregistrationInProgress";
    TargetHealthReasonEnumEnum["TargetInvalidState"] = "Target.InvalidState";
    TargetHealthReasonEnumEnum["TargetIpUnusable"] = "Target.IpUnusable";
    TargetHealthReasonEnumEnum["TargetHealthCheckDisabled"] = "Target.HealthCheckDisabled";
    TargetHealthReasonEnumEnum["ElbInternalError"] = "Elb.InternalError";
})(TargetHealthReasonEnumEnum = exports.TargetHealthReasonEnumEnum || (exports.TargetHealthReasonEnumEnum = {}));
