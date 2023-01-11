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
__exportStar(require("./canceljob"), exports);
__exportStar(require("./createcomputeenvironment"), exports);
__exportStar(require("./createjobqueue"), exports);
__exportStar(require("./deletecomputeenvironment"), exports);
__exportStar(require("./deletejobqueue"), exports);
__exportStar(require("./deregisterjobdefinition"), exports);
__exportStar(require("./describecomputeenvironments"), exports);
__exportStar(require("./describejobdefinitions"), exports);
__exportStar(require("./describejobqueues"), exports);
__exportStar(require("./describejobs"), exports);
__exportStar(require("./listjobs"), exports);
__exportStar(require("./listtagsforresource"), exports);
__exportStar(require("./registerjobdefinition"), exports);
__exportStar(require("./submitjob"), exports);
__exportStar(require("./tagresource"), exports);
__exportStar(require("./terminatejob"), exports);
__exportStar(require("./untagresource"), exports);
__exportStar(require("./updatecomputeenvironment"), exports);
__exportStar(require("./updatejobqueue"), exports);
