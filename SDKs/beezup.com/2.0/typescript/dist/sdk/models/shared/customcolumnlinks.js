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
exports.CustomColumnLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linkscatalogdeletecustomcolumnlink_1 = require("./linkscatalogdeletecustomcolumnlink");
var linkscataloggetcustomcolumnexpressionlink_1 = require("./linkscataloggetcustomcolumnexpressionlink");
var linkscatalogchangecustomcolumnusernamelink_1 = require("./linkscatalogchangecustomcolumnusernamelink");
var linkscatalogsavecustomcolumnlink_1 = require("./linkscatalogsavecustomcolumnlink");
var linkscatalogchangecustomcolumnexpressionlink_1 = require("./linkscatalogchangecustomcolumnexpressionlink");
var CustomColumnLinks = /** @class */ (function (_super) {
    __extends(CustomColumnLinks, _super);
    function CustomColumnLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", linkscatalogdeletecustomcolumnlink_1.LinksCatalogDeleteCustomColumnLink)
    ], CustomColumnLinks.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expression" }),
        __metadata("design:type", linkscataloggetcustomcolumnexpressionlink_1.LinksCatalogGetCustomColumnExpressionLink)
    ], CustomColumnLinks.prototype, "expression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rename" }),
        __metadata("design:type", linkscatalogchangecustomcolumnusernamelink_1.LinksCatalogChangeCustomColumnUserNameLink)
    ], CustomColumnLinks.prototype, "rename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save" }),
        __metadata("design:type", linkscatalogsavecustomcolumnlink_1.LinksCatalogSaveCustomColumnLink)
    ], CustomColumnLinks.prototype, "save", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saveExpression" }),
        __metadata("design:type", linkscatalogchangecustomcolumnexpressionlink_1.LinksCatalogChangeCustomColumnExpressionLink)
    ], CustomColumnLinks.prototype, "saveExpression", void 0);
    return CustomColumnLinks;
}(utils_1.SpeakeasyBase));
exports.CustomColumnLinks = CustomColumnLinks;
