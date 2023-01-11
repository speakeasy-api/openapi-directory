"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatusEnum = void 0;
var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Running"] = "RUNNING";
    JobStatusEnum["Paused"] = "PAUSED";
    JobStatusEnum["Cancelled"] = "CANCELLED";
    JobStatusEnum["Complete"] = "COMPLETE";
    JobStatusEnum["Idle"] = "IDLE";
    JobStatusEnum["UserPaused"] = "USER_PAUSED";
})(JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {}));
