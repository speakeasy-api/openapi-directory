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
exports.CreateFirewallResponse = exports.CreateFirewallRequest = exports.CreateFirewall401ApplicationJson = exports.CreateFirewallRequestBodyInput = exports.CreateFirewallRequestBodyOutboundRules = exports.CreateFirewallRequestBodyOutboundRulesProtocolEnum = exports.CreateFirewallRequestBodyInboundRules = exports.CreateFirewallRequestBodyInboundRulesSources = exports.CreateFirewallRequestBodyInboundRulesProtocolEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateFirewallRequestBodyInboundRulesProtocolEnum;
(function (CreateFirewallRequestBodyInboundRulesProtocolEnum) {
    CreateFirewallRequestBodyInboundRulesProtocolEnum["Tcp"] = "tcp";
    CreateFirewallRequestBodyInboundRulesProtocolEnum["Udp"] = "udp";
    CreateFirewallRequestBodyInboundRulesProtocolEnum["Icmp"] = "icmp";
})(CreateFirewallRequestBodyInboundRulesProtocolEnum = exports.CreateFirewallRequestBodyInboundRulesProtocolEnum || (exports.CreateFirewallRequestBodyInboundRulesProtocolEnum = {}));
var CreateFirewallRequestBodyInboundRulesSources = /** @class */ (function (_super) {
    __extends(CreateFirewallRequestBodyInboundRulesSources, _super);
    function CreateFirewallRequestBodyInboundRulesSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInboundRulesSources.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInboundRulesSources.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_ids" }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInboundRulesSources.prototype, "kubernetesIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancer_uids" }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInboundRulesSources.prototype, "loadBalancerUids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateFirewallRequestBodyInboundRulesSources.prototype, "tags", void 0);
    return CreateFirewallRequestBodyInboundRulesSources;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallRequestBodyInboundRulesSources = CreateFirewallRequestBodyInboundRulesSources;
var CreateFirewallRequestBodyInboundRules = /** @class */ (function (_super) {
    __extends(CreateFirewallRequestBodyInboundRules, _super);
    function CreateFirewallRequestBodyInboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], CreateFirewallRequestBodyInboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateFirewallRequestBodyInboundRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources" }),
        __metadata("design:type", CreateFirewallRequestBodyInboundRulesSources)
    ], CreateFirewallRequestBodyInboundRules.prototype, "sources", void 0);
    return CreateFirewallRequestBodyInboundRules;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallRequestBodyInboundRules = CreateFirewallRequestBodyInboundRules;
var CreateFirewallRequestBodyOutboundRulesProtocolEnum;
(function (CreateFirewallRequestBodyOutboundRulesProtocolEnum) {
    CreateFirewallRequestBodyOutboundRulesProtocolEnum["Tcp"] = "tcp";
    CreateFirewallRequestBodyOutboundRulesProtocolEnum["Udp"] = "udp";
    CreateFirewallRequestBodyOutboundRulesProtocolEnum["Icmp"] = "icmp";
})(CreateFirewallRequestBodyOutboundRulesProtocolEnum = exports.CreateFirewallRequestBodyOutboundRulesProtocolEnum || (exports.CreateFirewallRequestBodyOutboundRulesProtocolEnum = {}));
var CreateFirewallRequestBodyOutboundRules = /** @class */ (function (_super) {
    __extends(CreateFirewallRequestBodyOutboundRules, _super);
    function CreateFirewallRequestBodyOutboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0)
    ], CreateFirewallRequestBodyOutboundRules.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], CreateFirewallRequestBodyOutboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateFirewallRequestBodyOutboundRules.prototype, "protocol", void 0);
    return CreateFirewallRequestBodyOutboundRules;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallRequestBodyOutboundRules = CreateFirewallRequestBodyOutboundRules;
var CreateFirewallRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateFirewallRequestBodyInput, _super);
    function CreateFirewallRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInput.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inbound_rules", elemType: CreateFirewallRequestBodyInboundRules }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInput.prototype, "inboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFirewallRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_rules", elemType: CreateFirewallRequestBodyOutboundRules }),
        __metadata("design:type", Array)
    ], CreateFirewallRequestBodyInput.prototype, "outboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateFirewallRequestBodyInput.prototype, "tags", void 0);
    return CreateFirewallRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallRequestBodyInput = CreateFirewallRequestBodyInput;
var CreateFirewall401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateFirewall401ApplicationJson, _super);
    function CreateFirewall401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateFirewall401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateFirewall401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateFirewall401ApplicationJson.prototype, "requestId", void 0);
    return CreateFirewall401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateFirewall401ApplicationJson = CreateFirewall401ApplicationJson;
var CreateFirewallRequest = /** @class */ (function (_super) {
    __extends(CreateFirewallRequest, _super);
    function CreateFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFirewallRequestBodyInput)
    ], CreateFirewallRequest.prototype, "request", void 0);
    return CreateFirewallRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallRequest = CreateFirewallRequest;
var CreateFirewallResponse = /** @class */ (function (_super) {
    __extends(CreateFirewallResponse, _super);
    function CreateFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFirewallResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateFirewallResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateFirewallResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateFirewallResponse.prototype, "createFirewall202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateFirewall401ApplicationJson)
    ], CreateFirewallResponse.prototype, "createFirewall401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateFirewallResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateFirewallResponse;
}(utils_1.SpeakeasyBase));
exports.CreateFirewallResponse = CreateFirewallResponse;
