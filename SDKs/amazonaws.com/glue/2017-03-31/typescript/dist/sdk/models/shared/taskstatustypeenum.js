"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusTypeEnum = void 0;
var TaskStatusTypeEnum;
(function (TaskStatusTypeEnum) {
    TaskStatusTypeEnum["Starting"] = "STARTING";
    TaskStatusTypeEnum["Running"] = "RUNNING";
    TaskStatusTypeEnum["Stopping"] = "STOPPING";
    TaskStatusTypeEnum["Stopped"] = "STOPPED";
    TaskStatusTypeEnum["Succeeded"] = "SUCCEEDED";
    TaskStatusTypeEnum["Failed"] = "FAILED";
    TaskStatusTypeEnum["Timeout"] = "TIMEOUT";
})(TaskStatusTypeEnum = exports.TaskStatusTypeEnum || (exports.TaskStatusTypeEnum = {}));
