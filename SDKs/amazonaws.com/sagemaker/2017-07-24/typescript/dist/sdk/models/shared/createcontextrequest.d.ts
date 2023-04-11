import { SpeakeasyBase } from "../../../internal/utils";
import { ContextSource } from "./contextsource";
import { Tag } from "./tag";
export declare class CreateContextRequest extends SpeakeasyBase {
    contextName: string;
    contextType: string;
    description?: string;
    properties?: Record<string, string>;
    source: ContextSource;
    tags?: Tag[];
}
