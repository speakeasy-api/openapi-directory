import { SpeakeasyBase } from "../../../internal/utils";
export declare class SelectRequest extends SpeakeasyBase {
    consistentRead?: boolean;
    nextToken?: string;
    selectExpression: string;
}
