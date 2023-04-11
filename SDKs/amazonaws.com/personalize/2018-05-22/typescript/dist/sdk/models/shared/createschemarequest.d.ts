import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
export declare class CreateSchemaRequest extends SpeakeasyBase {
    domain?: DomainEnum;
    name: string;
    schema: string;
}
