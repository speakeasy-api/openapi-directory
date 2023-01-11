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
exports.ListDefaultProjectResourcesResponse = exports.ListDefaultProjectResources401ApplicationJson = exports.ListDefaultProjectResources200ApplicationJson = exports.ListDefaultProjectResources200ApplicationJsonResources = exports.ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum = exports.ListDefaultProjectResources200ApplicationJsonResourcesLinks = exports.ListDefaultProjectResources200ApplicationJsonMeta = exports.ListDefaultProjectResources200ApplicationJsonLinks = exports.ListDefaultProjectResources200ApplicationJsonLinksPages2 = exports.ListDefaultProjectResources200ApplicationJsonLinksPages1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDefaultProjectResources200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonLinksPages1, _super);
    function ListDefaultProjectResources200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListDefaultProjectResources200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonLinksPages1 = ListDefaultProjectResources200ApplicationJsonLinksPages1;
var ListDefaultProjectResources200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonLinksPages2, _super);
    function ListDefaultProjectResources200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListDefaultProjectResources200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonLinksPages2 = ListDefaultProjectResources200ApplicationJsonLinksPages2;
var ListDefaultProjectResources200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonLinks, _super);
    function ListDefaultProjectResources200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListDefaultProjectResources200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListDefaultProjectResources200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonLinks = ListDefaultProjectResources200ApplicationJsonLinks;
// ListDefaultProjectResources200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListDefaultProjectResources200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonMeta, _super);
    function ListDefaultProjectResources200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListDefaultProjectResources200ApplicationJsonMeta.prototype, "total", void 0);
    return ListDefaultProjectResources200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonMeta = ListDefaultProjectResources200ApplicationJsonMeta;
// ListDefaultProjectResources200ApplicationJsonResourcesLinks
/**
 * The links object contains the `self` object, which contains the resource relationship.
**/
var ListDefaultProjectResources200ApplicationJsonResourcesLinks = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonResourcesLinks, _super);
    function ListDefaultProjectResources200ApplicationJsonResourcesLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonResourcesLinks.prototype, "self", void 0);
    return ListDefaultProjectResources200ApplicationJsonResourcesLinks;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonResourcesLinks = ListDefaultProjectResources200ApplicationJsonResourcesLinks;
var ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum;
(function (ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum) {
    ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum["Ok"] = "ok";
    ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum["NotFound"] = "not_found";
    ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum["Assigned"] = "assigned";
    ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum["AlreadyAssigned"] = "already_assigned";
    ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum["ServiceDown"] = "service_down";
})(ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum = exports.ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum || (exports.ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum = {}));
var ListDefaultProjectResources200ApplicationJsonResources = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJsonResources, _super);
    function ListDefaultProjectResources200ApplicationJsonResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_at" }),
        __metadata("design:type", Date)
    ], ListDefaultProjectResources200ApplicationJsonResources.prototype, "assignedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDefaultProjectResources200ApplicationJsonResourcesLinks)
    ], ListDefaultProjectResources200ApplicationJsonResources.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonResources.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urn" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources200ApplicationJsonResources.prototype, "urn", void 0);
    return ListDefaultProjectResources200ApplicationJsonResources;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJsonResources = ListDefaultProjectResources200ApplicationJsonResources;
var ListDefaultProjectResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources200ApplicationJson, _super);
    function ListDefaultProjectResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDefaultProjectResources200ApplicationJsonLinks)
    ], ListDefaultProjectResources200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDefaultProjectResources200ApplicationJsonMeta)
    ], ListDefaultProjectResources200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: ListDefaultProjectResources200ApplicationJsonResources }),
        __metadata("design:type", Array)
    ], ListDefaultProjectResources200ApplicationJson.prototype, "resources", void 0);
    return ListDefaultProjectResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources200ApplicationJson = ListDefaultProjectResources200ApplicationJson;
var ListDefaultProjectResources401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResources401ApplicationJson, _super);
    function ListDefaultProjectResources401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDefaultProjectResources401ApplicationJson.prototype, "requestId", void 0);
    return ListDefaultProjectResources401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResources401ApplicationJson = ListDefaultProjectResources401ApplicationJson;
var ListDefaultProjectResourcesResponse = /** @class */ (function (_super) {
    __extends(ListDefaultProjectResourcesResponse, _super);
    function ListDefaultProjectResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDefaultProjectResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDefaultProjectResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDefaultProjectResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDefaultProjectResources200ApplicationJson)
    ], ListDefaultProjectResourcesResponse.prototype, "listDefaultProjectResources200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDefaultProjectResources401ApplicationJson)
    ], ListDefaultProjectResourcesResponse.prototype, "listDefaultProjectResources401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDefaultProjectResourcesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDefaultProjectResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.ListDefaultProjectResourcesResponse = ListDefaultProjectResourcesResponse;
