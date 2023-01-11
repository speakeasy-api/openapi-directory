"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./createfulfillmentpolicy"), exports);
__exportStar(require("./createorreplacesalestax"), exports);
__exportStar(require("./createpaymentpolicy"), exports);
__exportStar(require("./createreturnpolicy"), exports);
__exportStar(require("./deletefulfillmentpolicy"), exports);
__exportStar(require("./deletepaymentpolicy"), exports);
__exportStar(require("./deletereturnpolicy"), exports);
__exportStar(require("./deletesalestax"), exports);
__exportStar(require("./getfulfillmentpolicies"), exports);
__exportStar(require("./getfulfillmentpolicy"), exports);
__exportStar(require("./getfulfillmentpolicybyname"), exports);
__exportStar(require("./getkyc"), exports);
__exportStar(require("./getoptedinprograms"), exports);
__exportStar(require("./getpaymentpolicies"), exports);
__exportStar(require("./getpaymentpolicy"), exports);
__exportStar(require("./getpaymentpolicybyname"), exports);
__exportStar(require("./getpaymentsprogram"), exports);
__exportStar(require("./getpaymentsprogramonboarding"), exports);
__exportStar(require("./getprivileges"), exports);
__exportStar(require("./getratetables"), exports);
__exportStar(require("./getreturnpolicies"), exports);
__exportStar(require("./getreturnpolicy"), exports);
__exportStar(require("./getreturnpolicybyname"), exports);
__exportStar(require("./getsalestax"), exports);
__exportStar(require("./getsalestaxes"), exports);
__exportStar(require("./optintoprogram"), exports);
__exportStar(require("./optoutofprogram"), exports);
__exportStar(require("./updatefulfillmentpolicy"), exports);
__exportStar(require("./updatepaymentpolicy"), exports);
__exportStar(require("./updatereturnpolicy"), exports);
