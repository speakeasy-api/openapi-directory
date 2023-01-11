import "reflect-metadata";
import { ParamDecorator } from "./pathparams";
export declare class SpeakeasyBase {
    constructor(payload?: Record<string | symbol, unknown>);
}
export declare function SpeakeasyMetadata<T extends SpeakeasyBase = Record<string | symbol, unknown>>(params?: {
    data?: string;
    elemType?: {
        new (): T;
    };
    elemDepth?: number;
}): PropertyDecorator;
export declare function replaceParameters(stringWithParams: string, params: Map<string, string>): string;
export declare function generateURL(serverURL: string, path: string, pathParams: any): string;
export declare function parseParamDecorator(ann: string, fName: string, defaultStyle: string, defaultExplode: boolean): ParamDecorator;
export declare function isStringRecord(obj: any): obj is Record<string, string>;
export declare function isNumberRecord(obj: any): obj is Record<string, number>;
export declare function isBooleanRecord(obj: any): obj is Record<string, boolean>;
export declare function isEmpty(value: any): boolean;
