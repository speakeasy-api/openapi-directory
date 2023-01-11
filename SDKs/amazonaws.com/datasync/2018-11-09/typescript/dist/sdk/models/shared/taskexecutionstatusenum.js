"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskExecutionStatusEnum = void 0;
var TaskExecutionStatusEnum;
(function (TaskExecutionStatusEnum) {
    TaskExecutionStatusEnum["Queued"] = "QUEUED";
    TaskExecutionStatusEnum["Launching"] = "LAUNCHING";
    TaskExecutionStatusEnum["Preparing"] = "PREPARING";
    TaskExecutionStatusEnum["Transferring"] = "TRANSFERRING";
    TaskExecutionStatusEnum["Verifying"] = "VERIFYING";
    TaskExecutionStatusEnum["Success"] = "SUCCESS";
    TaskExecutionStatusEnum["Error"] = "ERROR";
})(TaskExecutionStatusEnum = exports.TaskExecutionStatusEnum || (exports.TaskExecutionStatusEnum = {}));
