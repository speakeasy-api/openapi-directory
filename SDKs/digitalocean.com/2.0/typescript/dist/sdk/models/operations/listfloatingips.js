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
exports.ListFloatingIpsResponse = exports.ListFloatingIps401ApplicationJson = exports.ListFloatingIps200ApplicationJson = exports.ListFloatingIps200ApplicationJsonMeta = exports.ListFloatingIps200ApplicationJsonLinks = exports.ListFloatingIps200ApplicationJsonLinksPages2 = exports.ListFloatingIps200ApplicationJsonLinksPages1 = exports.ListFloatingIps200ApplicationJsonFloatingIps = exports.ListFloatingIps200ApplicationJsonFloatingIpsRegion = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
// ListFloatingIps200ApplicationJsonFloatingIpsRegion
/**
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
var ListFloatingIps200ApplicationJsonFloatingIpsRegion = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonFloatingIpsRegion, _super);
    function ListFloatingIps200ApplicationJsonFloatingIpsRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], ListFloatingIps200ApplicationJsonFloatingIpsRegion.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", Object)
    ], ListFloatingIps200ApplicationJsonFloatingIpsRegion.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonFloatingIpsRegion.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes" }),
        __metadata("design:type", Object)
    ], ListFloatingIps200ApplicationJsonFloatingIpsRegion.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonFloatingIpsRegion.prototype, "slug", void 0);
    return ListFloatingIps200ApplicationJsonFloatingIpsRegion;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonFloatingIpsRegion = ListFloatingIps200ApplicationJsonFloatingIpsRegion;
var ListFloatingIps200ApplicationJsonFloatingIps = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonFloatingIps, _super);
    function ListFloatingIps200ApplicationJsonFloatingIps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet" }),
        __metadata("design:type", Object)
    ], ListFloatingIps200ApplicationJsonFloatingIps.prototype, "droplet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonFloatingIps.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], ListFloatingIps200ApplicationJsonFloatingIps.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", ListFloatingIps200ApplicationJsonFloatingIpsRegion)
    ], ListFloatingIps200ApplicationJsonFloatingIps.prototype, "region", void 0);
    return ListFloatingIps200ApplicationJsonFloatingIps;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonFloatingIps = ListFloatingIps200ApplicationJsonFloatingIps;
var ListFloatingIps200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonLinksPages1, _super);
    function ListFloatingIps200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListFloatingIps200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonLinksPages1 = ListFloatingIps200ApplicationJsonLinksPages1;
var ListFloatingIps200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonLinksPages2, _super);
    function ListFloatingIps200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListFloatingIps200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListFloatingIps200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonLinksPages2 = ListFloatingIps200ApplicationJsonLinksPages2;
var ListFloatingIps200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonLinks, _super);
    function ListFloatingIps200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListFloatingIps200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListFloatingIps200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonLinks = ListFloatingIps200ApplicationJsonLinks;
// ListFloatingIps200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListFloatingIps200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJsonMeta, _super);
    function ListFloatingIps200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListFloatingIps200ApplicationJsonMeta.prototype, "total", void 0);
    return ListFloatingIps200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJsonMeta = ListFloatingIps200ApplicationJsonMeta;
var ListFloatingIps200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFloatingIps200ApplicationJson, _super);
    function ListFloatingIps200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=floating_ips", elemType: ListFloatingIps200ApplicationJsonFloatingIps }),
        __metadata("design:type", Array)
    ], ListFloatingIps200ApplicationJson.prototype, "floatingIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListFloatingIps200ApplicationJsonLinks)
    ], ListFloatingIps200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFloatingIps200ApplicationJsonMeta)
    ], ListFloatingIps200ApplicationJson.prototype, "meta", void 0);
    return ListFloatingIps200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps200ApplicationJson = ListFloatingIps200ApplicationJson;
var ListFloatingIps401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFloatingIps401ApplicationJson, _super);
    function ListFloatingIps401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListFloatingIps401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListFloatingIps401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListFloatingIps401ApplicationJson.prototype, "requestId", void 0);
    return ListFloatingIps401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIps401ApplicationJson = ListFloatingIps401ApplicationJson;
var ListFloatingIpsResponse = /** @class */ (function (_super) {
    __extends(ListFloatingIpsResponse, _super);
    function ListFloatingIpsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFloatingIpsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListFloatingIpsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFloatingIpsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFloatingIps200ApplicationJson)
    ], ListFloatingIpsResponse.prototype, "listFloatingIps200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFloatingIps401ApplicationJson)
    ], ListFloatingIpsResponse.prototype, "listFloatingIps401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListFloatingIpsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListFloatingIpsResponse;
}(utils_1.SpeakeasyBase));
exports.ListFloatingIpsResponse = ListFloatingIpsResponse;
