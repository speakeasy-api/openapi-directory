"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerTypeEnum = void 0;
var TriggerTypeEnum;
(function (TriggerTypeEnum) {
    TriggerTypeEnum["CreatePipeline"] = "CreatePipeline";
    TriggerTypeEnum["StartPipelineExecution"] = "StartPipelineExecution";
    TriggerTypeEnum["PollForSourceChanges"] = "PollForSourceChanges";
    TriggerTypeEnum["Webhook"] = "Webhook";
    TriggerTypeEnum["CloudWatchEvent"] = "CloudWatchEvent";
    TriggerTypeEnum["PutActionRevision"] = "PutActionRevision";
})(TriggerTypeEnum = exports.TriggerTypeEnum || (exports.TriggerTypeEnum = {}));
