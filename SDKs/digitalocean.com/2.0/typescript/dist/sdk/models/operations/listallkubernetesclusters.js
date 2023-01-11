"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllKubernetesClustersResponse = exports.ListAllKubernetesClustersRequest = exports.ListAllKubernetesClusters401ApplicationJson = exports.ListAllKubernetesClusters200ApplicationJson = exports.ListAllKubernetesClusters200ApplicationJsonMeta = exports.ListAllKubernetesClusters200ApplicationJsonLinks = exports.ListAllKubernetesClusters200ApplicationJsonLinksPages2 = exports.ListAllKubernetesClusters200ApplicationJsonLinksPages1 = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClusters = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum = exports.ListAllKubernetesClustersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllKubernetesClustersQueryParams = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClustersQueryParams, _super);
    function ListAllKubernetesClustersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClustersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClustersQueryParams.prototype, "perPage", void 0);
    return ListAllKubernetesClustersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClustersQueryParams = ListAllKubernetesClustersQueryParams;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum;
(function (ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum) {
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Any"] = "any";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Monday"] = "monday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Tuesday"] = "tuesday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Wednesday"] = "wednesday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Thursday"] = "thursday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Friday"] = "friday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Saturday"] = "saturday";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum["Sunday"] = "sunday";
})(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum || (exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum = {}));
// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy
/**
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=day" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy.prototype, "day", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy.prototype, "startTime", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum;
(function (ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum) {
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum["Provisioning"] = "provisioning";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum["Running"] = "running";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum["Draining"] = "draining";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum["Deleting"] = "deleting";
})(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum || (exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum = {}));
// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus
/**
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus.prototype, "state", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "dropletId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes.prototype, "updatedAt", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum;
(function (ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum) {
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum["NoSchedule"] = "NoSchedule";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum["PreferNoSchedule"] = "PreferNoSchedule";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum["NoExecute"] = "NoExecute";
})(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum || (exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum = {}));
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=effect" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints.prototype, "effect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints.prototype, "value", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_scale" }),
        __metadata("design:type", Boolean)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "autoScale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_nodes" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "maxNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min_nodes" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "minNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodes", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "nodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taints", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools.prototype, "taints", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum;
(function (ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum) {
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Running"] = "running";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Provisioning"] = "provisioning";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Degraded"] = "degraded";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Error"] = "error";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Deleted"] = "deleted";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Upgrading"] = "upgrading";
    ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum["Deleting"] = "deleting";
})(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum = exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum || (exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum = {}));
// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus
/**
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
var ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus.prototype, "state", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus = ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus;
var ListAllKubernetesClusters200ApplicationJsonKubernetesClusters = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonKubernetesClusters, _super);
    function ListAllKubernetesClusters200ApplicationJsonKubernetesClusters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_upgrade" }),
        __metadata("design:type", Boolean)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "autoUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster_subnet" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "clusterSubnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipv4" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "ipv4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenance_policy" }),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "maintenancePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_pools", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "nodePools", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_enabled" }),
        __metadata("design:type", Boolean)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "registryEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_subnet" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "serviceSubnet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=surge_upgrade" }),
        __metadata("design:type", Boolean)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "surgeUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonKubernetesClusters.prototype, "vpcUuid", void 0);
    return ListAllKubernetesClusters200ApplicationJsonKubernetesClusters;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonKubernetesClusters = ListAllKubernetesClusters200ApplicationJsonKubernetesClusters;
var ListAllKubernetesClusters200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonLinksPages1, _super);
    function ListAllKubernetesClusters200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllKubernetesClusters200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonLinksPages1 = ListAllKubernetesClusters200ApplicationJsonLinksPages1;
var ListAllKubernetesClusters200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonLinksPages2, _super);
    function ListAllKubernetesClusters200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllKubernetesClusters200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonLinksPages2 = ListAllKubernetesClusters200ApplicationJsonLinksPages2;
var ListAllKubernetesClusters200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonLinks, _super);
    function ListAllKubernetesClusters200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllKubernetesClusters200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllKubernetesClusters200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonLinks = ListAllKubernetesClusters200ApplicationJsonLinks;
// ListAllKubernetesClusters200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllKubernetesClusters200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJsonMeta, _super);
    function ListAllKubernetesClusters200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllKubernetesClusters200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllKubernetesClusters200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJsonMeta = ListAllKubernetesClusters200ApplicationJsonMeta;
var ListAllKubernetesClusters200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters200ApplicationJson, _super);
    function ListAllKubernetesClusters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_clusters", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClusters }),
        __metadata("design:type", Array)
    ], ListAllKubernetesClusters200ApplicationJson.prototype, "kubernetesClusters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJsonLinks)
    ], ListAllKubernetesClusters200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJsonMeta)
    ], ListAllKubernetesClusters200ApplicationJson.prototype, "meta", void 0);
    return ListAllKubernetesClusters200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters200ApplicationJson = ListAllKubernetesClusters200ApplicationJson;
var ListAllKubernetesClusters401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClusters401ApplicationJson, _super);
    function ListAllKubernetesClusters401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllKubernetesClusters401ApplicationJson.prototype, "requestId", void 0);
    return ListAllKubernetesClusters401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClusters401ApplicationJson = ListAllKubernetesClusters401ApplicationJson;
var ListAllKubernetesClustersRequest = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClustersRequest, _super);
    function ListAllKubernetesClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKubernetesClustersQueryParams)
    ], ListAllKubernetesClustersRequest.prototype, "queryParams", void 0);
    return ListAllKubernetesClustersRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClustersRequest = ListAllKubernetesClustersRequest;
var ListAllKubernetesClustersResponse = /** @class */ (function (_super) {
    __extends(ListAllKubernetesClustersResponse, _super);
    function ListAllKubernetesClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllKubernetesClustersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllKubernetesClustersResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllKubernetesClustersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKubernetesClusters200ApplicationJson)
    ], ListAllKubernetesClustersResponse.prototype, "listAllKubernetesClusters200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKubernetesClusters401ApplicationJson)
    ], ListAllKubernetesClustersResponse.prototype, "listAllKubernetesClusters401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllKubernetesClustersResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllKubernetesClustersResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllKubernetesClustersResponse = ListAllKubernetesClustersResponse;
