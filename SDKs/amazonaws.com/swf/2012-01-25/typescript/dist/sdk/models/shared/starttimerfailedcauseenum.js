"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTimerFailedCauseEnum = void 0;
var StartTimerFailedCauseEnum;
(function (StartTimerFailedCauseEnum) {
    StartTimerFailedCauseEnum["TimerIdAlreadyInUse"] = "TIMER_ID_ALREADY_IN_USE";
    StartTimerFailedCauseEnum["OpenTimersLimitExceeded"] = "OPEN_TIMERS_LIMIT_EXCEEDED";
    StartTimerFailedCauseEnum["TimerCreationRateExceeded"] = "TIMER_CREATION_RATE_EXCEEDED";
    StartTimerFailedCauseEnum["OperationNotPermitted"] = "OPERATION_NOT_PERMITTED";
})(StartTimerFailedCauseEnum = exports.StartTimerFailedCauseEnum || (exports.StartTimerFailedCauseEnum = {}));
