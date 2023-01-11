"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingActivityStatusCodeEnum = void 0;
var ScalingActivityStatusCodeEnum;
(function (ScalingActivityStatusCodeEnum) {
    ScalingActivityStatusCodeEnum["PendingSpotBidPlacement"] = "PendingSpotBidPlacement";
    ScalingActivityStatusCodeEnum["WaitingForSpotInstanceRequestId"] = "WaitingForSpotInstanceRequestId";
    ScalingActivityStatusCodeEnum["WaitingForSpotInstanceId"] = "WaitingForSpotInstanceId";
    ScalingActivityStatusCodeEnum["WaitingForInstanceId"] = "WaitingForInstanceId";
    ScalingActivityStatusCodeEnum["PreInService"] = "PreInService";
    ScalingActivityStatusCodeEnum["InProgress"] = "InProgress";
    ScalingActivityStatusCodeEnum["WaitingForElbConnectionDraining"] = "WaitingForELBConnectionDraining";
    ScalingActivityStatusCodeEnum["MidLifecycleAction"] = "MidLifecycleAction";
    ScalingActivityStatusCodeEnum["WaitingForInstanceWarmup"] = "WaitingForInstanceWarmup";
    ScalingActivityStatusCodeEnum["Successful"] = "Successful";
    ScalingActivityStatusCodeEnum["Failed"] = "Failed";
    ScalingActivityStatusCodeEnum["Cancelled"] = "Cancelled";
})(ScalingActivityStatusCodeEnum = exports.ScalingActivityStatusCodeEnum || (exports.ScalingActivityStatusCodeEnum = {}));
