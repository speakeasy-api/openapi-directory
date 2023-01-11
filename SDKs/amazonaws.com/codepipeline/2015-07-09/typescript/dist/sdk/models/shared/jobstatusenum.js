"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatusEnum = void 0;
var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Created"] = "Created";
    JobStatusEnum["Queued"] = "Queued";
    JobStatusEnum["Dispatched"] = "Dispatched";
    JobStatusEnum["InProgress"] = "InProgress";
    JobStatusEnum["TimedOut"] = "TimedOut";
    JobStatusEnum["Succeeded"] = "Succeeded";
    JobStatusEnum["Failed"] = "Failed";
})(JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {}));
