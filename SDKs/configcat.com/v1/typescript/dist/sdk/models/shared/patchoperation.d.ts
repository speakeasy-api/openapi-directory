import { SpeakeasyBase } from "../../../internal/utils";
import { JsonNode } from "./jsonnode";
import { JsonPointerInput } from "./jsonpointer";
import { OperationTypeEnum } from "./operationtypeenum";
export declare class PatchOperationInput extends SpeakeasyBase {
    from?: JsonPointerInput;
    op?: OperationTypeEnum;
    path?: JsonPointerInput;
    value?: JsonNode;
}
