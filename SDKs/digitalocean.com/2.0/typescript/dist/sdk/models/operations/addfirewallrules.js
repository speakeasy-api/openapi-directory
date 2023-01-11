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
exports.AddFirewallRulesResponse = exports.AddFirewallRulesRequest = exports.AddFirewallRules401ApplicationJson = exports.AddFirewallRulesRequestBody = exports.AddFirewallRulesRequestBodyOutboundRules = exports.AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = exports.AddFirewallRulesRequestBodyInboundRules = exports.AddFirewallRulesRequestBodyInboundRulesSources = exports.AddFirewallRulesRequestBodyInboundRulesProtocolEnum = exports.AddFirewallRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(AddFirewallRulesPathParams, _super);
    function AddFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=firewall_id" }),
        __metadata("design:type", String)
    ], AddFirewallRulesPathParams.prototype, "firewallId", void 0);
    return AddFirewallRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesPathParams = AddFirewallRulesPathParams;
var AddFirewallRulesRequestBodyInboundRulesProtocolEnum;
(function (AddFirewallRulesRequestBodyInboundRulesProtocolEnum) {
    AddFirewallRulesRequestBodyInboundRulesProtocolEnum["Tcp"] = "tcp";
    AddFirewallRulesRequestBodyInboundRulesProtocolEnum["Udp"] = "udp";
    AddFirewallRulesRequestBodyInboundRulesProtocolEnum["Icmp"] = "icmp";
})(AddFirewallRulesRequestBodyInboundRulesProtocolEnum = exports.AddFirewallRulesRequestBodyInboundRulesProtocolEnum || (exports.AddFirewallRulesRequestBodyInboundRulesProtocolEnum = {}));
var AddFirewallRulesRequestBodyInboundRulesSources = /** @class */ (function (_super) {
    __extends(AddFirewallRulesRequestBodyInboundRulesSources, _super);
    function AddFirewallRulesRequestBodyInboundRulesSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBodyInboundRulesSources.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBodyInboundRulesSources.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_ids" }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBodyInboundRulesSources.prototype, "kubernetesIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancer_uids" }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBodyInboundRulesSources.prototype, "loadBalancerUids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], AddFirewallRulesRequestBodyInboundRulesSources.prototype, "tags", void 0);
    return AddFirewallRulesRequestBodyInboundRulesSources;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesRequestBodyInboundRulesSources = AddFirewallRulesRequestBodyInboundRulesSources;
var AddFirewallRulesRequestBodyInboundRules = /** @class */ (function (_super) {
    __extends(AddFirewallRulesRequestBodyInboundRules, _super);
    function AddFirewallRulesRequestBodyInboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], AddFirewallRulesRequestBodyInboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], AddFirewallRulesRequestBodyInboundRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources" }),
        __metadata("design:type", AddFirewallRulesRequestBodyInboundRulesSources)
    ], AddFirewallRulesRequestBodyInboundRules.prototype, "sources", void 0);
    return AddFirewallRulesRequestBodyInboundRules;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesRequestBodyInboundRules = AddFirewallRulesRequestBodyInboundRules;
var AddFirewallRulesRequestBodyOutboundRulesProtocolEnum;
(function (AddFirewallRulesRequestBodyOutboundRulesProtocolEnum) {
    AddFirewallRulesRequestBodyOutboundRulesProtocolEnum["Tcp"] = "tcp";
    AddFirewallRulesRequestBodyOutboundRulesProtocolEnum["Udp"] = "udp";
    AddFirewallRulesRequestBodyOutboundRulesProtocolEnum["Icmp"] = "icmp";
})(AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = exports.AddFirewallRulesRequestBodyOutboundRulesProtocolEnum || (exports.AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = {}));
var AddFirewallRulesRequestBodyOutboundRules = /** @class */ (function (_super) {
    __extends(AddFirewallRulesRequestBodyOutboundRules, _super);
    function AddFirewallRulesRequestBodyOutboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0)
    ], AddFirewallRulesRequestBodyOutboundRules.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], AddFirewallRulesRequestBodyOutboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], AddFirewallRulesRequestBodyOutboundRules.prototype, "protocol", void 0);
    return AddFirewallRulesRequestBodyOutboundRules;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesRequestBodyOutboundRules = AddFirewallRulesRequestBodyOutboundRules;
var AddFirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(AddFirewallRulesRequestBody, _super);
    function AddFirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inbound_rules", elemType: AddFirewallRulesRequestBodyInboundRules }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBody.prototype, "inboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_rules", elemType: AddFirewallRulesRequestBodyOutboundRules }),
        __metadata("design:type", Array)
    ], AddFirewallRulesRequestBody.prototype, "outboundRules", void 0);
    return AddFirewallRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesRequestBody = AddFirewallRulesRequestBody;
var AddFirewallRules401ApplicationJson = /** @class */ (function (_super) {
    __extends(AddFirewallRules401ApplicationJson, _super);
    function AddFirewallRules401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddFirewallRules401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddFirewallRules401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], AddFirewallRules401ApplicationJson.prototype, "requestId", void 0);
    return AddFirewallRules401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRules401ApplicationJson = AddFirewallRules401ApplicationJson;
var AddFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(AddFirewallRulesRequest, _super);
    function AddFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddFirewallRulesPathParams)
    ], AddFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFirewallRulesRequestBody)
    ], AddFirewallRulesRequest.prototype, "request", void 0);
    return AddFirewallRulesRequest;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesRequest = AddFirewallRulesRequest;
var AddFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(AddFirewallRulesResponse, _super);
    function AddFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddFirewallRulesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddFirewallRules401ApplicationJson)
    ], AddFirewallRulesResponse.prototype, "addFirewallRules401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], AddFirewallRulesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return AddFirewallRulesResponse;
}(utils_1.SpeakeasyBase));
exports.AddFirewallRulesResponse = AddFirewallRulesResponse;
