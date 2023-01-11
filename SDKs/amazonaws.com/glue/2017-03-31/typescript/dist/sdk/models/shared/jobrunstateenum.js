"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRunStateEnum = void 0;
var JobRunStateEnum;
(function (JobRunStateEnum) {
    JobRunStateEnum["Starting"] = "STARTING";
    JobRunStateEnum["Running"] = "RUNNING";
    JobRunStateEnum["Stopping"] = "STOPPING";
    JobRunStateEnum["Stopped"] = "STOPPED";
    JobRunStateEnum["Succeeded"] = "SUCCEEDED";
    JobRunStateEnum["Failed"] = "FAILED";
    JobRunStateEnum["Timeout"] = "TIMEOUT";
})(JobRunStateEnum = exports.JobRunStateEnum || (exports.JobRunStateEnum = {}));
