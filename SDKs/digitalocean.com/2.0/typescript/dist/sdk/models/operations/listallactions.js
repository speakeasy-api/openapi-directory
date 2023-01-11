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
exports.ListAllActionsResponse = exports.ListAllActionsRequest = exports.ListAllActions401ApplicationJson = exports.ListAllActions200ApplicationJson = exports.ListAllActions200ApplicationJsonMeta = exports.ListAllActions200ApplicationJsonLinks = exports.ListAllActions200ApplicationJsonLinksPages2 = exports.ListAllActions200ApplicationJsonLinksPages1 = exports.ListAllActions200ApplicationJsonActions = exports.ListAllActions200ApplicationJsonActionsStatusEnum = exports.ListAllActions200ApplicationJsonActionsRegion = exports.ListAllActionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllActionsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllActionsQueryParams, _super);
    function ListAllActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllActionsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllActionsQueryParams.prototype, "perPage", void 0);
    return ListAllActionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllActionsQueryParams = ListAllActionsQueryParams;
var ListAllActions200ApplicationJsonActionsRegion = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonActionsRegion, _super);
    function ListAllActions200ApplicationJsonActionsRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], ListAllActions200ApplicationJsonActionsRegion.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", Object)
    ], ListAllActions200ApplicationJsonActionsRegion.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonActionsRegion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes" }),
        __metadata("design:type", Object)
    ], ListAllActions200ApplicationJsonActionsRegion.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonActionsRegion.prototype, "slug", void 0);
    return ListAllActions200ApplicationJsonActionsRegion;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonActionsRegion = ListAllActions200ApplicationJsonActionsRegion;
var ListAllActions200ApplicationJsonActionsStatusEnum;
(function (ListAllActions200ApplicationJsonActionsStatusEnum) {
    ListAllActions200ApplicationJsonActionsStatusEnum["InProgress"] = "in-progress";
    ListAllActions200ApplicationJsonActionsStatusEnum["Completed"] = "completed";
    ListAllActions200ApplicationJsonActionsStatusEnum["Errored"] = "errored";
})(ListAllActions200ApplicationJsonActionsStatusEnum = exports.ListAllActions200ApplicationJsonActionsStatusEnum || (exports.ListAllActions200ApplicationJsonActionsStatusEnum = {}));
var ListAllActions200ApplicationJsonActions = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonActions, _super);
    function ListAllActions200ApplicationJsonActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], ListAllActions200ApplicationJsonActions.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllActions200ApplicationJsonActions.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", ListAllActions200ApplicationJsonActionsRegion)
    ], ListAllActions200ApplicationJsonActions.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region_slug" }),
        __metadata("design:type", Object)
    ], ListAllActions200ApplicationJsonActions.prototype, "regionSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", Number)
    ], ListAllActions200ApplicationJsonActions.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonActions.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], ListAllActions200ApplicationJsonActions.prototype, "startedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonActions.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonActions.prototype, "type", void 0);
    return ListAllActions200ApplicationJsonActions;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonActions = ListAllActions200ApplicationJsonActions;
var ListAllActions200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonLinksPages1, _super);
    function ListAllActions200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllActions200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonLinksPages1 = ListAllActions200ApplicationJsonLinksPages1;
var ListAllActions200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonLinksPages2, _super);
    function ListAllActions200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllActions200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllActions200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonLinksPages2 = ListAllActions200ApplicationJsonLinksPages2;
var ListAllActions200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonLinks, _super);
    function ListAllActions200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllActions200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllActions200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonLinks = ListAllActions200ApplicationJsonLinks;
// ListAllActions200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllActions200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJsonMeta, _super);
    function ListAllActions200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllActions200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllActions200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJsonMeta = ListAllActions200ApplicationJsonMeta;
var ListAllActions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllActions200ApplicationJson, _super);
    function ListAllActions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: ListAllActions200ApplicationJsonActions }),
        __metadata("design:type", Array)
    ], ListAllActions200ApplicationJson.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllActions200ApplicationJsonLinks)
    ], ListAllActions200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllActions200ApplicationJsonMeta)
    ], ListAllActions200ApplicationJson.prototype, "meta", void 0);
    return ListAllActions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllActions200ApplicationJson = ListAllActions200ApplicationJson;
var ListAllActions401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllActions401ApplicationJson, _super);
    function ListAllActions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllActions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllActions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllActions401ApplicationJson.prototype, "requestId", void 0);
    return ListAllActions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllActions401ApplicationJson = ListAllActions401ApplicationJson;
var ListAllActionsRequest = /** @class */ (function (_super) {
    __extends(ListAllActionsRequest, _super);
    function ListAllActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllActionsQueryParams)
    ], ListAllActionsRequest.prototype, "queryParams", void 0);
    return ListAllActionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllActionsRequest = ListAllActionsRequest;
var ListAllActionsResponse = /** @class */ (function (_super) {
    __extends(ListAllActionsResponse, _super);
    function ListAllActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllActionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllActions200ApplicationJson)
    ], ListAllActionsResponse.prototype, "listAllActions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllActions401ApplicationJson)
    ], ListAllActionsResponse.prototype, "listAllActions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllActionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllActionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllActionsResponse = ListAllActionsResponse;
