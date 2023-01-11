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
exports.UpdateFirewallResponse = exports.UpdateFirewallRequest = exports.UpdateFirewall401ApplicationJson = exports.UpdateFirewallRequestBodyInput = exports.UpdateFirewallRequestBodyOutboundRules = exports.UpdateFirewallRequestBodyOutboundRulesProtocolEnum = exports.UpdateFirewallRequestBodyInboundRules = exports.UpdateFirewallRequestBodyInboundRulesSources = exports.UpdateFirewallRequestBodyInboundRulesProtocolEnum = exports.UpdateFirewallPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateFirewallPathParams = /** @class */ (function (_super) {
    __extends(UpdateFirewallPathParams, _super);
    function UpdateFirewallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=firewall_id" }),
        __metadata("design:type", String)
    ], UpdateFirewallPathParams.prototype, "firewallId", void 0);
    return UpdateFirewallPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallPathParams = UpdateFirewallPathParams;
var UpdateFirewallRequestBodyInboundRulesProtocolEnum;
(function (UpdateFirewallRequestBodyInboundRulesProtocolEnum) {
    UpdateFirewallRequestBodyInboundRulesProtocolEnum["Tcp"] = "tcp";
    UpdateFirewallRequestBodyInboundRulesProtocolEnum["Udp"] = "udp";
    UpdateFirewallRequestBodyInboundRulesProtocolEnum["Icmp"] = "icmp";
})(UpdateFirewallRequestBodyInboundRulesProtocolEnum = exports.UpdateFirewallRequestBodyInboundRulesProtocolEnum || (exports.UpdateFirewallRequestBodyInboundRulesProtocolEnum = {}));
var UpdateFirewallRequestBodyInboundRulesSources = /** @class */ (function (_super) {
    __extends(UpdateFirewallRequestBodyInboundRulesSources, _super);
    function UpdateFirewallRequestBodyInboundRulesSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInboundRulesSources.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInboundRulesSources.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_ids" }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInboundRulesSources.prototype, "kubernetesIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancer_uids" }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInboundRulesSources.prototype, "loadBalancerUids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], UpdateFirewallRequestBodyInboundRulesSources.prototype, "tags", void 0);
    return UpdateFirewallRequestBodyInboundRulesSources;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallRequestBodyInboundRulesSources = UpdateFirewallRequestBodyInboundRulesSources;
var UpdateFirewallRequestBodyInboundRules = /** @class */ (function (_super) {
    __extends(UpdateFirewallRequestBodyInboundRules, _super);
    function UpdateFirewallRequestBodyInboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], UpdateFirewallRequestBodyInboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateFirewallRequestBodyInboundRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources" }),
        __metadata("design:type", UpdateFirewallRequestBodyInboundRulesSources)
    ], UpdateFirewallRequestBodyInboundRules.prototype, "sources", void 0);
    return UpdateFirewallRequestBodyInboundRules;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallRequestBodyInboundRules = UpdateFirewallRequestBodyInboundRules;
var UpdateFirewallRequestBodyOutboundRulesProtocolEnum;
(function (UpdateFirewallRequestBodyOutboundRulesProtocolEnum) {
    UpdateFirewallRequestBodyOutboundRulesProtocolEnum["Tcp"] = "tcp";
    UpdateFirewallRequestBodyOutboundRulesProtocolEnum["Udp"] = "udp";
    UpdateFirewallRequestBodyOutboundRulesProtocolEnum["Icmp"] = "icmp";
})(UpdateFirewallRequestBodyOutboundRulesProtocolEnum = exports.UpdateFirewallRequestBodyOutboundRulesProtocolEnum || (exports.UpdateFirewallRequestBodyOutboundRulesProtocolEnum = {}));
var UpdateFirewallRequestBodyOutboundRules = /** @class */ (function (_super) {
    __extends(UpdateFirewallRequestBodyOutboundRules, _super);
    function UpdateFirewallRequestBodyOutboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0)
    ], UpdateFirewallRequestBodyOutboundRules.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], UpdateFirewallRequestBodyOutboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateFirewallRequestBodyOutboundRules.prototype, "protocol", void 0);
    return UpdateFirewallRequestBodyOutboundRules;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallRequestBodyOutboundRules = UpdateFirewallRequestBodyOutboundRules;
var UpdateFirewallRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateFirewallRequestBodyInput, _super);
    function UpdateFirewallRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInput.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inbound_rules", elemType: UpdateFirewallRequestBodyInboundRules }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInput.prototype, "inboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateFirewallRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_rules", elemType: UpdateFirewallRequestBodyOutboundRules }),
        __metadata("design:type", Array)
    ], UpdateFirewallRequestBodyInput.prototype, "outboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], UpdateFirewallRequestBodyInput.prototype, "tags", void 0);
    return UpdateFirewallRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallRequestBodyInput = UpdateFirewallRequestBodyInput;
var UpdateFirewall401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateFirewall401ApplicationJson, _super);
    function UpdateFirewall401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateFirewall401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateFirewall401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateFirewall401ApplicationJson.prototype, "requestId", void 0);
    return UpdateFirewall401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewall401ApplicationJson = UpdateFirewall401ApplicationJson;
var UpdateFirewallRequest = /** @class */ (function (_super) {
    __extends(UpdateFirewallRequest, _super);
    function UpdateFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFirewallPathParams)
    ], UpdateFirewallRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFirewallRequestBodyInput)
    ], UpdateFirewallRequest.prototype, "request", void 0);
    return UpdateFirewallRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallRequest = UpdateFirewallRequest;
var UpdateFirewallResponse = /** @class */ (function (_super) {
    __extends(UpdateFirewallResponse, _super);
    function UpdateFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFirewallResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFirewallResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFirewallResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFirewallResponse.prototype, "updateFirewall200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFirewall401ApplicationJson)
    ], UpdateFirewallResponse.prototype, "updateFirewall401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateFirewallResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateFirewallResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFirewallResponse = UpdateFirewallResponse;
