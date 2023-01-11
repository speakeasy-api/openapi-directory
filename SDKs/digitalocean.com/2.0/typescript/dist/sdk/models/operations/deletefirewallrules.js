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
exports.DeleteFirewallRulesResponse = exports.DeleteFirewallRulesRequest = exports.DeleteFirewallRules401ApplicationJson = exports.DeleteFirewallRulesRequestBody = exports.DeleteFirewallRulesRequestBodyOutboundRules = exports.DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = exports.DeleteFirewallRulesRequestBodyInboundRules = exports.DeleteFirewallRulesRequestBodyInboundRulesSources = exports.DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = exports.DeleteFirewallRulesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesPathParams, _super);
    function DeleteFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=firewall_id" }),
        __metadata("design:type", String)
    ], DeleteFirewallRulesPathParams.prototype, "firewallId", void 0);
    return DeleteFirewallRulesPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesPathParams = DeleteFirewallRulesPathParams;
var DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum;
(function (DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum) {
    DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum["Tcp"] = "tcp";
    DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum["Udp"] = "udp";
    DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum["Icmp"] = "icmp";
})(DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = exports.DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum || (exports.DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = {}));
var DeleteFirewallRulesRequestBodyInboundRulesSources = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesRequestBodyInboundRulesSources, _super);
    function DeleteFirewallRulesRequestBodyInboundRulesSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBodyInboundRulesSources.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBodyInboundRulesSources.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_ids" }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBodyInboundRulesSources.prototype, "kubernetesIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancer_uids" }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBodyInboundRulesSources.prototype, "loadBalancerUids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], DeleteFirewallRulesRequestBodyInboundRulesSources.prototype, "tags", void 0);
    return DeleteFirewallRulesRequestBodyInboundRulesSources;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesRequestBodyInboundRulesSources = DeleteFirewallRulesRequestBodyInboundRulesSources;
var DeleteFirewallRulesRequestBodyInboundRules = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesRequestBodyInboundRules, _super);
    function DeleteFirewallRulesRequestBodyInboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], DeleteFirewallRulesRequestBodyInboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DeleteFirewallRulesRequestBodyInboundRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources" }),
        __metadata("design:type", DeleteFirewallRulesRequestBodyInboundRulesSources)
    ], DeleteFirewallRulesRequestBodyInboundRules.prototype, "sources", void 0);
    return DeleteFirewallRulesRequestBodyInboundRules;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesRequestBodyInboundRules = DeleteFirewallRulesRequestBodyInboundRules;
var DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum;
(function (DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum) {
    DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum["Tcp"] = "tcp";
    DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum["Udp"] = "udp";
    DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum["Icmp"] = "icmp";
})(DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = exports.DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum || (exports.DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = {}));
var DeleteFirewallRulesRequestBodyOutboundRules = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesRequestBodyOutboundRules, _super);
    function DeleteFirewallRulesRequestBodyOutboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0)
    ], DeleteFirewallRulesRequestBodyOutboundRules.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], DeleteFirewallRulesRequestBodyOutboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DeleteFirewallRulesRequestBodyOutboundRules.prototype, "protocol", void 0);
    return DeleteFirewallRulesRequestBodyOutboundRules;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesRequestBodyOutboundRules = DeleteFirewallRulesRequestBodyOutboundRules;
var DeleteFirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesRequestBody, _super);
    function DeleteFirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inbound_rules", elemType: DeleteFirewallRulesRequestBodyInboundRules }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBody.prototype, "inboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_rules", elemType: DeleteFirewallRulesRequestBodyOutboundRules }),
        __metadata("design:type", Array)
    ], DeleteFirewallRulesRequestBody.prototype, "outboundRules", void 0);
    return DeleteFirewallRulesRequestBody;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesRequestBody = DeleteFirewallRulesRequestBody;
var DeleteFirewallRules401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteFirewallRules401ApplicationJson, _super);
    function DeleteFirewallRules401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteFirewallRules401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteFirewallRules401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], DeleteFirewallRules401ApplicationJson.prototype, "requestId", void 0);
    return DeleteFirewallRules401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRules401ApplicationJson = DeleteFirewallRules401ApplicationJson;
var DeleteFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesRequest, _super);
    function DeleteFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteFirewallRulesPathParams)
    ], DeleteFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteFirewallRulesRequestBody)
    ], DeleteFirewallRulesRequest.prototype, "request", void 0);
    return DeleteFirewallRulesRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesRequest = DeleteFirewallRulesRequest;
var DeleteFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(DeleteFirewallRulesResponse, _super);
    function DeleteFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteFirewallRulesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteFirewallRules401ApplicationJson)
    ], DeleteFirewallRulesResponse.prototype, "deleteFirewallRules401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], DeleteFirewallRulesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return DeleteFirewallRulesResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteFirewallRulesResponse = DeleteFirewallRulesResponse;
