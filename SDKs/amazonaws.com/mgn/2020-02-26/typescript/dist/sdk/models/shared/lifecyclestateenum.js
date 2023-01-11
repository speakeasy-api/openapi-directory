"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeCycleStateEnum = void 0;
var LifeCycleStateEnum;
(function (LifeCycleStateEnum) {
    LifeCycleStateEnum["Stopped"] = "STOPPED";
    LifeCycleStateEnum["NotReady"] = "NOT_READY";
    LifeCycleStateEnum["ReadyForTest"] = "READY_FOR_TEST";
    LifeCycleStateEnum["Testing"] = "TESTING";
    LifeCycleStateEnum["ReadyForCutover"] = "READY_FOR_CUTOVER";
    LifeCycleStateEnum["CuttingOver"] = "CUTTING_OVER";
    LifeCycleStateEnum["Cutover"] = "CUTOVER";
    LifeCycleStateEnum["Disconnected"] = "DISCONNECTED";
})(LifeCycleStateEnum = exports.LifeCycleStateEnum || (exports.LifeCycleStateEnum = {}));
