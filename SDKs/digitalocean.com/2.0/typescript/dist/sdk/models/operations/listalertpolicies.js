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
exports.ListAlertPoliciesResponse = exports.ListAlertPoliciesRequest = exports.ListAlertPolicies401ApplicationJson = exports.ListAlertPolicies200ApplicationJson = exports.ListAlertPolicies200ApplicationJsonPolicies = exports.ListAlertPolicies200ApplicationJsonPoliciesWindowEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesTypeEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesCompareEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesAlerts = exports.ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack = exports.ListAlertPolicies200ApplicationJsonMeta = exports.ListAlertPolicies200ApplicationJsonLinks = exports.ListAlertPolicies200ApplicationJsonLinksPages2 = exports.ListAlertPolicies200ApplicationJsonLinksPages1 = exports.ListAlertPoliciesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAlertPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(ListAlertPoliciesQueryParams, _super);
    function ListAlertPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAlertPoliciesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAlertPoliciesQueryParams.prototype, "perPage", void 0);
    return ListAlertPoliciesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAlertPoliciesQueryParams = ListAlertPoliciesQueryParams;
var ListAlertPolicies200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonLinksPages1, _super);
    function ListAlertPolicies200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAlertPolicies200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonLinksPages1 = ListAlertPolicies200ApplicationJsonLinksPages1;
var ListAlertPolicies200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonLinksPages2, _super);
    function ListAlertPolicies200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAlertPolicies200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonLinksPages2 = ListAlertPolicies200ApplicationJsonLinksPages2;
var ListAlertPolicies200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonLinks, _super);
    function ListAlertPolicies200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAlertPolicies200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAlertPolicies200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonLinks = ListAlertPolicies200ApplicationJsonLinks;
// ListAlertPolicies200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAlertPolicies200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonMeta, _super);
    function ListAlertPolicies200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAlertPolicies200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAlertPolicies200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonMeta = ListAlertPolicies200ApplicationJsonMeta;
var ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack, _super);
    function ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack.prototype, "url", void 0);
    return ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack = ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack;
var ListAlertPolicies200ApplicationJsonPoliciesAlerts = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonPoliciesAlerts, _super);
    function ListAlertPolicies200ApplicationJsonPoliciesAlerts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", Array)
    ], ListAlertPolicies200ApplicationJsonPoliciesAlerts.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slack", elemType: ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack }),
        __metadata("design:type", Array)
    ], ListAlertPolicies200ApplicationJsonPoliciesAlerts.prototype, "slack", void 0);
    return ListAlertPolicies200ApplicationJsonPoliciesAlerts;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonPoliciesAlerts = ListAlertPolicies200ApplicationJsonPoliciesAlerts;
var ListAlertPolicies200ApplicationJsonPoliciesCompareEnum;
(function (ListAlertPolicies200ApplicationJsonPoliciesCompareEnum) {
    ListAlertPolicies200ApplicationJsonPoliciesCompareEnum["GreaterThan"] = "GreaterThan";
    ListAlertPolicies200ApplicationJsonPoliciesCompareEnum["LessThan"] = "LessThan";
})(ListAlertPolicies200ApplicationJsonPoliciesCompareEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesCompareEnum || (exports.ListAlertPolicies200ApplicationJsonPoliciesCompareEnum = {}));
var ListAlertPolicies200ApplicationJsonPoliciesTypeEnum;
(function (ListAlertPolicies200ApplicationJsonPoliciesTypeEnum) {
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletLoad1"] = "v1/insights/droplet/load_1";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletLoad5"] = "v1/insights/droplet/load_5";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletLoad15"] = "v1/insights/droplet/load_15";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletMemoryUtilizationPercent"] = "v1/insights/droplet/memory_utilization_percent";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletDiskUtilizationPercent"] = "v1/insights/droplet/disk_utilization_percent";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletCpu"] = "v1/insights/droplet/cpu";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletDiskRead"] = "v1/insights/droplet/disk_read";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletDiskWrite"] = "v1/insights/droplet/disk_write";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletPublicOutboundBandwidth"] = "v1/insights/droplet/public_outbound_bandwidth";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletPublicInboundBandwidth"] = "v1/insights/droplet/public_inbound_bandwidth";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletPrivateOutboundBandwidth"] = "v1/insights/droplet/private_outbound_bandwidth";
    ListAlertPolicies200ApplicationJsonPoliciesTypeEnum["V1InsightsDropletPrivateInboundBandwidth"] = "v1/insights/droplet/private_inbound_bandwidth";
})(ListAlertPolicies200ApplicationJsonPoliciesTypeEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesTypeEnum || (exports.ListAlertPolicies200ApplicationJsonPoliciesTypeEnum = {}));
var ListAlertPolicies200ApplicationJsonPoliciesWindowEnum;
(function (ListAlertPolicies200ApplicationJsonPoliciesWindowEnum) {
    ListAlertPolicies200ApplicationJsonPoliciesWindowEnum["Fivem"] = "5m";
    ListAlertPolicies200ApplicationJsonPoliciesWindowEnum["Tenm"] = "10m";
    ListAlertPolicies200ApplicationJsonPoliciesWindowEnum["Thirtym"] = "30m";
    ListAlertPolicies200ApplicationJsonPoliciesWindowEnum["Oneh"] = "1h";
})(ListAlertPolicies200ApplicationJsonPoliciesWindowEnum = exports.ListAlertPolicies200ApplicationJsonPoliciesWindowEnum || (exports.ListAlertPolicies200ApplicationJsonPoliciesWindowEnum = {}));
var ListAlertPolicies200ApplicationJsonPolicies = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJsonPolicies, _super);
    function ListAlertPolicies200ApplicationJsonPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alerts" }),
        __metadata("design:type", ListAlertPolicies200ApplicationJsonPoliciesAlerts)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "alerts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compare" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "compare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entities" }),
        __metadata("design:type", Array)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "entities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "uuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=window" }),
        __metadata("design:type", String)
    ], ListAlertPolicies200ApplicationJsonPolicies.prototype, "window", void 0);
    return ListAlertPolicies200ApplicationJsonPolicies;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJsonPolicies = ListAlertPolicies200ApplicationJsonPolicies;
var ListAlertPolicies200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAlertPolicies200ApplicationJson, _super);
    function ListAlertPolicies200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAlertPolicies200ApplicationJsonLinks)
    ], ListAlertPolicies200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAlertPolicies200ApplicationJsonMeta)
    ], ListAlertPolicies200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policies", elemType: ListAlertPolicies200ApplicationJsonPolicies }),
        __metadata("design:type", Array)
    ], ListAlertPolicies200ApplicationJson.prototype, "policies", void 0);
    return ListAlertPolicies200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies200ApplicationJson = ListAlertPolicies200ApplicationJson;
var ListAlertPolicies401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAlertPolicies401ApplicationJson, _super);
    function ListAlertPolicies401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAlertPolicies401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAlertPolicies401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAlertPolicies401ApplicationJson.prototype, "requestId", void 0);
    return ListAlertPolicies401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAlertPolicies401ApplicationJson = ListAlertPolicies401ApplicationJson;
var ListAlertPoliciesRequest = /** @class */ (function (_super) {
    __extends(ListAlertPoliciesRequest, _super);
    function ListAlertPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAlertPoliciesQueryParams)
    ], ListAlertPoliciesRequest.prototype, "queryParams", void 0);
    return ListAlertPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.ListAlertPoliciesRequest = ListAlertPoliciesRequest;
var ListAlertPoliciesResponse = /** @class */ (function (_super) {
    __extends(ListAlertPoliciesResponse, _super);
    function ListAlertPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAlertPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAlertPoliciesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAlertPoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAlertPolicies200ApplicationJson)
    ], ListAlertPoliciesResponse.prototype, "listAlertPolicies200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAlertPolicies401ApplicationJson)
    ], ListAlertPoliciesResponse.prototype, "listAlertPolicies401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAlertPoliciesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAlertPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.ListAlertPoliciesResponse = ListAlertPoliciesResponse;
