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
exports.ListKubernetesAssociatedResourcesResponse = exports.ListKubernetesAssociatedResourcesRequest = exports.ListKubernetesAssociatedResources401ApplicationJson = exports.ListKubernetesAssociatedResources200ApplicationJson = exports.ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers = exports.ListKubernetesAssociatedResourcesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListKubernetesAssociatedResourcesPathParams = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResourcesPathParams, _super);
    function ListKubernetesAssociatedResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResourcesPathParams.prototype, "clusterId", void 0);
    return ListKubernetesAssociatedResourcesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResourcesPathParams = ListKubernetesAssociatedResourcesPathParams;
var ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers, _super);
    function ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers.prototype, "name", void 0);
    return ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers = ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers;
// ListKubernetesAssociatedResources200ApplicationJson
/**
 * An object containing the IDs of resources associated with a Kubernetes cluster.
**/
var ListKubernetesAssociatedResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResources200ApplicationJson, _super);
    function ListKubernetesAssociatedResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancers", elemType: ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers }),
        __metadata("design:type", Array)
    ], ListKubernetesAssociatedResources200ApplicationJson.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_snapshots", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems }),
        __metadata("design:type", Array)
    ], ListKubernetesAssociatedResources200ApplicationJson.prototype, "volumeSnapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems }),
        __metadata("design:type", Array)
    ], ListKubernetesAssociatedResources200ApplicationJson.prototype, "volumes", void 0);
    return ListKubernetesAssociatedResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResources200ApplicationJson = ListKubernetesAssociatedResources200ApplicationJson;
var ListKubernetesAssociatedResources401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResources401ApplicationJson, _super);
    function ListKubernetesAssociatedResources401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResources401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResources401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResources401ApplicationJson.prototype, "requestId", void 0);
    return ListKubernetesAssociatedResources401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResources401ApplicationJson = ListKubernetesAssociatedResources401ApplicationJson;
var ListKubernetesAssociatedResourcesRequest = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResourcesRequest, _super);
    function ListKubernetesAssociatedResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListKubernetesAssociatedResourcesPathParams)
    ], ListKubernetesAssociatedResourcesRequest.prototype, "pathParams", void 0);
    return ListKubernetesAssociatedResourcesRequest;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResourcesRequest = ListKubernetesAssociatedResourcesRequest;
var ListKubernetesAssociatedResourcesResponse = /** @class */ (function (_super) {
    __extends(ListKubernetesAssociatedResourcesResponse, _super);
    function ListKubernetesAssociatedResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListKubernetesAssociatedResources200ApplicationJson)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "listKubernetesAssociatedResources200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListKubernetesAssociatedResources401ApplicationJson)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "listKubernetesAssociatedResources401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListKubernetesAssociatedResourcesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListKubernetesAssociatedResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.ListKubernetesAssociatedResourcesResponse = ListKubernetesAssociatedResourcesResponse;
