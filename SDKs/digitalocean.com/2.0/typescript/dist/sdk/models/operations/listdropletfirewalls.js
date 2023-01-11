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
exports.ListDropletFirewallsResponse = exports.ListDropletFirewallsRequest = exports.ListDropletFirewalls401ApplicationJson = exports.ListDropletFirewalls200ApplicationJson = exports.ListDropletFirewalls200ApplicationJsonMeta = exports.ListDropletFirewalls200ApplicationJsonLinks = exports.ListDropletFirewalls200ApplicationJsonLinksPages2 = exports.ListDropletFirewalls200ApplicationJsonLinksPages1 = exports.ListDropletFirewalls200ApplicationJsonFirewalls = exports.ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum = exports.ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges = exports.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules = exports.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum = exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRules = exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources = exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum = exports.ListDropletFirewallsQueryParams = exports.ListDropletFirewallsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDropletFirewallsPathParams = /** @class */ (function (_super) {
    __extends(ListDropletFirewallsPathParams, _super);
    function ListDropletFirewallsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], ListDropletFirewallsPathParams.prototype, "dropletId", void 0);
    return ListDropletFirewallsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewallsPathParams = ListDropletFirewallsPathParams;
var ListDropletFirewallsQueryParams = /** @class */ (function (_super) {
    __extends(ListDropletFirewallsQueryParams, _super);
    function ListDropletFirewallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListDropletFirewallsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListDropletFirewallsQueryParams.prototype, "perPage", void 0);
    return ListDropletFirewallsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewallsQueryParams = ListDropletFirewallsQueryParams;
var ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum;
(function (ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum) {
    ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum["Tcp"] = "tcp";
    ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum["Udp"] = "udp";
    ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum["Icmp"] = "icmp";
})(ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum = exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum || (exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum = {}));
var ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources, _super);
    function ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_ids" }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources.prototype, "kubernetesIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancer_uids" }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources.prototype, "loadBalancerUids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources.prototype, "tags", void 0);
    return ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources = ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources;
var ListDropletFirewalls200ApplicationJsonFirewallsInboundRules = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonFirewallsInboundRules, _super);
    function ListDropletFirewalls200ApplicationJsonFirewallsInboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources" }),
        __metadata("design:type", ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources)
    ], ListDropletFirewalls200ApplicationJsonFirewallsInboundRules.prototype, "sources", void 0);
    return ListDropletFirewalls200ApplicationJsonFirewallsInboundRules;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonFirewallsInboundRules = ListDropletFirewalls200ApplicationJsonFirewallsInboundRules;
var ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum;
(function (ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum) {
    ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum["Tcp"] = "tcp";
    ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum["Udp"] = "udp";
    ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum["Icmp"] = "icmp";
})(ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum = exports.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum || (exports.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum = {}));
var ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules, _super);
    function ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations" }),
        __metadata("design:type", shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0)
    ], ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules.prototype, "ports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules.prototype, "protocol", void 0);
    return ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules = ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules;
var ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges, _super);
    function ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_id" }),
        __metadata("design:type", Number)
    ], ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges.prototype, "dropletId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removing" }),
        __metadata("design:type", Boolean)
    ], ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges.prototype, "removing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges.prototype, "status", void 0);
    return ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges = ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges;
var ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum;
(function (ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum) {
    ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum["Waiting"] = "waiting";
    ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum["Succeeded"] = "succeeded";
    ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum["Failed"] = "failed";
})(ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum = exports.ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum || (exports.ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum = {}));
var ListDropletFirewalls200ApplicationJsonFirewalls = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonFirewalls, _super);
    function ListDropletFirewalls200ApplicationJsonFirewalls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_ids" }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "dropletIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inbound_rules", elemType: ListDropletFirewalls200ApplicationJsonFirewallsInboundRules }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "inboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_rules", elemType: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "outboundRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pending_changes", elemType: ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "pendingChanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], ListDropletFirewalls200ApplicationJsonFirewalls.prototype, "tags", void 0);
    return ListDropletFirewalls200ApplicationJsonFirewalls;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonFirewalls = ListDropletFirewalls200ApplicationJsonFirewalls;
var ListDropletFirewalls200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonLinksPages1, _super);
    function ListDropletFirewalls200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListDropletFirewalls200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonLinksPages1 = ListDropletFirewalls200ApplicationJsonLinksPages1;
var ListDropletFirewalls200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonLinksPages2, _super);
    function ListDropletFirewalls200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListDropletFirewalls200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonLinksPages2 = ListDropletFirewalls200ApplicationJsonLinksPages2;
var ListDropletFirewalls200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonLinks, _super);
    function ListDropletFirewalls200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListDropletFirewalls200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListDropletFirewalls200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonLinks = ListDropletFirewalls200ApplicationJsonLinks;
// ListDropletFirewalls200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListDropletFirewalls200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJsonMeta, _super);
    function ListDropletFirewalls200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListDropletFirewalls200ApplicationJsonMeta.prototype, "total", void 0);
    return ListDropletFirewalls200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJsonMeta = ListDropletFirewalls200ApplicationJsonMeta;
var ListDropletFirewalls200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls200ApplicationJson, _super);
    function ListDropletFirewalls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewalls", elemType: ListDropletFirewalls200ApplicationJsonFirewalls }),
        __metadata("design:type", Array)
    ], ListDropletFirewalls200ApplicationJson.prototype, "firewalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDropletFirewalls200ApplicationJsonLinks)
    ], ListDropletFirewalls200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDropletFirewalls200ApplicationJsonMeta)
    ], ListDropletFirewalls200ApplicationJson.prototype, "meta", void 0);
    return ListDropletFirewalls200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls200ApplicationJson = ListDropletFirewalls200ApplicationJson;
var ListDropletFirewalls401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletFirewalls401ApplicationJson, _super);
    function ListDropletFirewalls401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDropletFirewalls401ApplicationJson.prototype, "requestId", void 0);
    return ListDropletFirewalls401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewalls401ApplicationJson = ListDropletFirewalls401ApplicationJson;
var ListDropletFirewallsRequest = /** @class */ (function (_super) {
    __extends(ListDropletFirewallsRequest, _super);
    function ListDropletFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletFirewallsPathParams)
    ], ListDropletFirewallsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletFirewallsQueryParams)
    ], ListDropletFirewallsRequest.prototype, "queryParams", void 0);
    return ListDropletFirewallsRequest;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewallsRequest = ListDropletFirewallsRequest;
var ListDropletFirewallsResponse = /** @class */ (function (_super) {
    __extends(ListDropletFirewallsResponse, _super);
    function ListDropletFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDropletFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDropletFirewallsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDropletFirewallsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletFirewalls200ApplicationJson)
    ], ListDropletFirewallsResponse.prototype, "listDropletFirewalls200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletFirewalls401ApplicationJson)
    ], ListDropletFirewallsResponse.prototype, "listDropletFirewalls401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDropletFirewallsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDropletFirewallsResponse;
}(utils_1.SpeakeasyBase));
exports.ListDropletFirewallsResponse = ListDropletFirewallsResponse;
