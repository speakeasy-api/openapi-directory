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
exports.UpdateLoadBalancerResponse = exports.UpdateLoadBalancerRequest = exports.UpdateLoadBalancer401ApplicationJson = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagInput = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdInput = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = exports.UpdateLoadBalancerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateLoadBalancerPathParams = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerPathParams, _super);
    function UpdateLoadBalancerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=lb_id" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerPathParams.prototype, "lbId", void 0);
    return UpdateLoadBalancerPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerPathParams = UpdateLoadBalancerPathParams;
var UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum["RoundRobin"] = "round_robin";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum["LeastConnections"] = "least_connections";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Http2"] = "http2";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Http2"] = "http2";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/**
 * An object specifying a forwarding rule for a load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "entryPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "entryProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "targetPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "targetProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls_passthrough" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "tlsPassthrough", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules;
var UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/**
 * An object specifying health check settings for the load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_interval_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "checkIntervalSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthy_threshold" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_timeout_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "responseTimeoutSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unhealthy_threshold" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "unhealthyThreshold", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
var UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbSmall"] = "lb-small";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbMedium"] = "lb-medium";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbLarge"] = "lb-large";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum["Cookies"] = "cookies";
    UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum["None"] = "none";
})(UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_ttl_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "cookieTtlSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "type", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
var UpdateLoadBalancerRequestBodyAssignDropletsByIdInput = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByIdInput, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByIdInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "algorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_backend_keepalive" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "enableBackendKeepalive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_proxy_protocol" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "enableProxyProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarding_rules", elemType: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules }),
        __metadata("design:type", Array)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "forwardingRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http_to_https" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "redirectHttpToHttps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "stickySessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "vpcUuid", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByIdInput;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByIdInput = UpdateLoadBalancerRequestBodyAssignDropletsByIdInput;
var UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum["RoundRobin"] = "round_robin";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum["LeastConnections"] = "least_connections";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Http2"] = "http2";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Http2"] = "http2";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/**
 * An object specifying a forwarding rule for a load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "entryPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "entryProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "targetPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "targetProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls_passthrough" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "tlsPassthrough", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules;
var UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Http"] = "http";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Https"] = "https";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Tcp"] = "tcp";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/**
 * An object specifying health check settings for the load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_interval_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "checkIntervalSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthy_threshold" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_timeout_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "responseTimeoutSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unhealthy_threshold" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "unhealthyThreshold", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
var UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbSmall"] = "lb-small";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbMedium"] = "lb-medium";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbLarge"] = "lb-large";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = {}));
var UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
(function (UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum) {
    UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum["Cookies"] = "cookies";
    UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum["None"] = "none";
})(UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum || (exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = {}));
// UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
var UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_ttl_seconds" }),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "cookieTtlSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "type", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
var UpdateLoadBalancerRequestBodyAssignDropletsByTagInput = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequestBodyAssignDropletsByTagInput, _super);
    function UpdateLoadBalancerRequestBodyAssignDropletsByTagInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "algorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_backend_keepalive" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "enableBackendKeepalive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_proxy_protocol" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "enableProxyProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarding_rules", elemType: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules }),
        __metadata("design:type", Array)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "forwardingRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http_to_https" }),
        __metadata("design:type", Boolean)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "redirectHttpToHttps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "stickySessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "vpcUuid", void 0);
    return UpdateLoadBalancerRequestBodyAssignDropletsByTagInput;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequestBodyAssignDropletsByTagInput = UpdateLoadBalancerRequestBodyAssignDropletsByTagInput;
var UpdateLoadBalancer401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancer401ApplicationJson, _super);
    function UpdateLoadBalancer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancer401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancer401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateLoadBalancer401ApplicationJson.prototype, "requestId", void 0);
    return UpdateLoadBalancer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancer401ApplicationJson = UpdateLoadBalancer401ApplicationJson;
var UpdateLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerRequest, _super);
    function UpdateLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLoadBalancerPathParams)
    ], UpdateLoadBalancerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateLoadBalancerRequest.prototype, "request", void 0);
    return UpdateLoadBalancerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerRequest = UpdateLoadBalancerRequest;
var UpdateLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerResponse, _super);
    function UpdateLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLoadBalancerResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateLoadBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLoadBalancerResponse.prototype, "updateLoadBalancer200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLoadBalancer401ApplicationJson)
    ], UpdateLoadBalancerResponse.prototype, "updateLoadBalancer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateLoadBalancerResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateLoadBalancerResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateLoadBalancerResponse = UpdateLoadBalancerResponse;
