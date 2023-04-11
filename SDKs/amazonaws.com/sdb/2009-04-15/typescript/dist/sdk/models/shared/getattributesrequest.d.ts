import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttributesRequest extends SpeakeasyBase {
    attributeNames?: string[];
    consistentRead?: boolean;
    domainName: string;
    itemName: string;
}
