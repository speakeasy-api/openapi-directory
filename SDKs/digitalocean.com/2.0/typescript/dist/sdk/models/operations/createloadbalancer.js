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
exports.CreateLoadBalancerResponse = exports.CreateLoadBalancerRequest = exports.CreateLoadBalancer401ApplicationJson = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagInput = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdInput = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum["RoundRobin"] = "round_robin";
    CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum["LeastConnections"] = "least_connections";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Http2"] = "http2";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Http2"] = "http2";
    CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/**
 * An object specifying a forwarding rule for a load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "entryPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "entryProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "targetPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "targetProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls_passthrough" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules.prototype, "tlsPassthrough", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules = CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules;
var CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/**
 * An object specifying health check settings for the load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_interval_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "checkIntervalSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthy_threshold" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_timeout_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "responseTimeoutSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unhealthy_threshold" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck.prototype, "unhealthyThreshold", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck = CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
var CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbSmall"] = "lb-small";
    CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbMedium"] = "lb-medium";
    CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum["LbLarge"] = "lb-large";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum["Cookies"] = "cookies";
    CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum["None"] = "none";
})(CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_ttl_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "cookieTtlSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions.prototype, "type", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions = CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
var CreateLoadBalancerRequestBodyAssignDropletsByIdInput = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByIdInput, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByIdInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "algorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_backend_keepalive" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "enableBackendKeepalive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_proxy_protocol" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "enableProxyProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarding_rules", elemType: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules }),
        __metadata("design:type", Array)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "forwardingRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http_to_https" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "redirectHttpToHttps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "stickySessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByIdInput.prototype, "vpcUuid", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByIdInput;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByIdInput = CreateLoadBalancerRequestBodyAssignDropletsByIdInput;
var CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum["RoundRobin"] = "round_robin";
    CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum["LeastConnections"] = "least_connections";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Http2"] = "http2";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Http2"] = "http2";
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/**
 * An object specifying a forwarding rule for a load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "entryPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "entryProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "targetPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "targetProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls_passthrough" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules.prototype, "tlsPassthrough", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules = CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules;
var CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Http"] = "http";
    CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Https"] = "https";
    CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum["Tcp"] = "tcp";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/**
 * An object specifying health check settings for the load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_interval_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "checkIntervalSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthy_threshold" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_timeout_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "responseTimeoutSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unhealthy_threshold" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck.prototype, "unhealthyThreshold", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck = CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
var CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbSmall"] = "lb-small";
    CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbMedium"] = "lb-medium";
    CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum["LbLarge"] = "lb-large";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = {}));
var CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
(function (CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum) {
    CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum["Cookies"] = "cookies";
    CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum["None"] = "none";
})(CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = exports.CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum || (exports.CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = {}));
// CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
var CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "cookieName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookie_ttl_seconds" }),
        __metadata("design:type", Number)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "cookieTtlSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions.prototype, "type", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions = CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
var CreateLoadBalancerRequestBodyAssignDropletsByTagInput = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequestBodyAssignDropletsByTagInput, _super);
    function CreateLoadBalancerRequestBodyAssignDropletsByTagInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "algorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_backend_keepalive" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "enableBackendKeepalive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable_proxy_protocol" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "enableProxyProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarding_rules", elemType: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules }),
        __metadata("design:type", Array)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "forwardingRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_http_to_https" }),
        __metadata("design:type", Boolean)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "redirectHttpToHttps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "stickySessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerRequestBodyAssignDropletsByTagInput.prototype, "vpcUuid", void 0);
    return CreateLoadBalancerRequestBodyAssignDropletsByTagInput;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequestBodyAssignDropletsByTagInput = CreateLoadBalancerRequestBodyAssignDropletsByTagInput;
var CreateLoadBalancer401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateLoadBalancer401ApplicationJson, _super);
    function CreateLoadBalancer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateLoadBalancer401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateLoadBalancer401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateLoadBalancer401ApplicationJson.prototype, "requestId", void 0);
    return CreateLoadBalancer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancer401ApplicationJson = CreateLoadBalancer401ApplicationJson;
var CreateLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerRequest, _super);
    function CreateLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateLoadBalancerRequest.prototype, "request", void 0);
    return CreateLoadBalancerRequest;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerRequest = CreateLoadBalancerRequest;
var CreateLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerResponse, _super);
    function CreateLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateLoadBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerResponse.prototype, "createLoadBalancer202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLoadBalancer401ApplicationJson)
    ], CreateLoadBalancerResponse.prototype, "createLoadBalancer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateLoadBalancerResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateLoadBalancerResponse;
}(utils_1.SpeakeasyBase));
exports.CreateLoadBalancerResponse = CreateLoadBalancerResponse;
