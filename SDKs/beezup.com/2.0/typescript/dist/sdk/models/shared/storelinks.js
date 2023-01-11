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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksdeletestorelink_1 = require("./linksdeletestorelink");
var linksgetstorelink_1 = require("./linksgetstorelink");
var linkssharestorelink_1 = require("./linkssharestorelink");
var linksgetstoreshareslink_1 = require("./linksgetstoreshareslink");
var linksupdatestorelink_1 = require("./linksupdatestorelink");
// StoreLinks
/**
 * The action links for this store
**/
var StoreLinks = /** @class */ (function (_super) {
    __extends(StoreLinks, _super);
    function StoreLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteStore" }),
        __metadata("design:type", linksdeletestorelink_1.LinksDeleteStoreLink)
    ], StoreLinks.prototype, "deleteStore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetstorelink_1.LinksGetStoreLink)
    ], StoreLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share" }),
        __metadata("design:type", linkssharestorelink_1.LinksShareStoreLink)
    ], StoreLinks.prototype, "share", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shares" }),
        __metadata("design:type", linksgetstoreshareslink_1.LinksGetStoreSharesLink)
    ], StoreLinks.prototype, "shares", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateStore" }),
        __metadata("design:type", linksupdatestorelink_1.LinksUpdateStoreLink)
    ], StoreLinks.prototype, "updateStore", void 0);
    return StoreLinks;
}(utils_1.SpeakeasyBase));
exports.StoreLinks = StoreLinks;
