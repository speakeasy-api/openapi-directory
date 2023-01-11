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
exports.OrderListFull = void 0;
var utils_1 = require("../../../internal/utils");
var orderlistfulllinks_1 = require("./orderlistfulllinks");
var order_1 = require("./order");
var beezupcommonpaginationresult_1 = require("./beezupcommonpaginationresult");
// OrderListFull
/**
 * The order list with all information we have from the orders and its items.\
 * The paginationResult properties can be null if the list is empty.
 *
**/
var OrderListFull = /** @class */ (function (_super) {
    __extends(OrderListFull, _super);
    function OrderListFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", orderlistfulllinks_1.OrderListFullLinks)
    ], OrderListFull.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orders", elemType: order_1.Order }),
        __metadata("design:type", Array)
    ], OrderListFull.prototype, "orders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paginationResult" }),
        __metadata("design:type", beezupcommonpaginationresult_1.BeezUpCommonPaginationResult)
    ], OrderListFull.prototype, "paginationResult", void 0);
    return OrderListFull;
}(utils_1.SpeakeasyBase));
exports.OrderListFull = OrderListFull;
