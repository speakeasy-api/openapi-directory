"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulationJobStatusEnum = void 0;
var SimulationJobStatusEnum;
(function (SimulationJobStatusEnum) {
    SimulationJobStatusEnum["Pending"] = "Pending";
    SimulationJobStatusEnum["Preparing"] = "Preparing";
    SimulationJobStatusEnum["Running"] = "Running";
    SimulationJobStatusEnum["Restarting"] = "Restarting";
    SimulationJobStatusEnum["Completed"] = "Completed";
    SimulationJobStatusEnum["Failed"] = "Failed";
    SimulationJobStatusEnum["RunningFailed"] = "RunningFailed";
    SimulationJobStatusEnum["Terminating"] = "Terminating";
    SimulationJobStatusEnum["Terminated"] = "Terminated";
    SimulationJobStatusEnum["Canceled"] = "Canceled";
})(SimulationJobStatusEnum = exports.SimulationJobStatusEnum || (exports.SimulationJobStatusEnum = {}));
