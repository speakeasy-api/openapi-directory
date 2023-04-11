import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListResourcesInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceModel?: string;
    roleArn?: string;
    typeName: string;
    typeVersionId?: string;
}
