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
__exportStar(require("./deletefact"), exports);
__exportStar(require("./getfact"), exports);
__exportStar(require("./getfactcategories"), exports);
__exportStar(require("./getfactfod"), exports);
__exportStar(require("./getfactfodcategories"), exports);
__exportStar(require("./getfactnumbers"), exports);
__exportStar(require("./getfactonthisdayborn"), exports);
__exportStar(require("./getfactonthisdaydied"), exports);
__exportStar(require("./getfactonthisdayevent"), exports);
__exportStar(require("./getfactrandom"), exports);
__exportStar(require("./getfactsearch"), exports);
__exportStar(require("./putfact"), exports);
