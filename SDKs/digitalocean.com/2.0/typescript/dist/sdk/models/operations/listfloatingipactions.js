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
exports.ListFloatingIpActionsResponse = exports.ListFloatingIpActionsRequest = exports.ListFloatingIpActions401ApplicationJson = exports.ListFloatingIpActions200ApplicationJson = exports.ListFloatingIpActions200ApplicationJsonMeta = exports.ListFloatingIpActions200ApplicationJsonLinks = exports.ListFloatingIpActions200ApplicationJsonLinksPages2 = exports.ListFloatingIpActions200ApplicationJsonLinksPages1 = exports.ListFloatingIpActionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListFloatingIpActionsPathParams = /** @class */ (function (_super) {
    __extends(ListFloatingIpActionsPathParams, _super);
    function ListFloatingIpActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=floating_ip" }),
        __metadata("design:type", String)
    ], ListFloatingIpActionsPathParams.prototype, "floatingIp", void 0);
    return ListFloatingIpActionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActionsPathParams = ListFloatingIpActionsPathParams;
var ListFloatingIpActions200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions200ApplicationJsonLinksPages1, _super);
    function ListFloatingIpActions200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListFloatingIpActions200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions200ApplicationJsonLinksPages1 = ListFloatingIpActions200ApplicationJsonLinksPages1;
var ListFloatingIpActions200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions200ApplicationJsonLinksPages2, _super);
    function ListFloatingIpActions200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListFloatingIpActions200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions200ApplicationJsonLinksPages2 = ListFloatingIpActions200ApplicationJsonLinksPages2;
var ListFloatingIpActions200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions200ApplicationJsonLinks, _super);
    function ListFloatingIpActions200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListFloatingIpActions200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListFloatingIpActions200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions200ApplicationJsonLinks = ListFloatingIpActions200ApplicationJsonLinks;
// ListFloatingIpActions200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListFloatingIpActions200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions200ApplicationJsonMeta, _super);
    function ListFloatingIpActions200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListFloatingIpActions200ApplicationJsonMeta.prototype, "total", void 0);
    return ListFloatingIpActions200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions200ApplicationJsonMeta = ListFloatingIpActions200ApplicationJsonMeta;
var ListFloatingIpActions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions200ApplicationJson, _super);
    function ListFloatingIpActions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems }),
        __metadata("design:type", Array)
    ], ListFloatingIpActions200ApplicationJson.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListFloatingIpActions200ApplicationJsonLinks)
    ], ListFloatingIpActions200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFloatingIpActions200ApplicationJsonMeta)
    ], ListFloatingIpActions200ApplicationJson.prototype, "meta", void 0);
    return ListFloatingIpActions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions200ApplicationJson = ListFloatingIpActions200ApplicationJson;
var ListFloatingIpActions401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFloatingIpActions401ApplicationJson, _super);
    function ListFloatingIpActions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListFloatingIpActions401ApplicationJson.prototype, "requestId", void 0);
    return ListFloatingIpActions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActions401ApplicationJson = ListFloatingIpActions401ApplicationJson;
var ListFloatingIpActionsRequest = /** @class */ (function (_super) {
    __extends(ListFloatingIpActionsRequest, _super);
    function ListFloatingIpActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFloatingIpActionsPathParams)
    ], ListFloatingIpActionsRequest.prototype, "pathParams", void 0);
    return ListFloatingIpActionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActionsRequest = ListFloatingIpActionsRequest;
var ListFloatingIpActionsResponse = /** @class */ (function (_super) {
    __extends(ListFloatingIpActionsResponse, _super);
    function ListFloatingIpActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFloatingIpActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListFloatingIpActionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFloatingIpActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFloatingIpActions200ApplicationJson)
    ], ListFloatingIpActionsResponse.prototype, "listFloatingIpActions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFloatingIpActions401ApplicationJson)
    ], ListFloatingIpActionsResponse.prototype, "listFloatingIpActions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListFloatingIpActionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListFloatingIpActionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpActionsResponse = ListFloatingIpActionsResponse;
