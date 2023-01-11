import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Scope } from "./scope";
export declare class Exclusion extends SpeakeasyBase {
    arn?: string;
    attributes?: Attribute[];
    description?: string;
    recommendation?: string;
    scopes?: Scope[];
    title?: string;
}
