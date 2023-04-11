import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { Tag } from "./tag";
export declare class CreateDatasetGroupRequest extends SpeakeasyBase {
    domain?: DomainEnum;
    kmsKeyArn?: string;
    name: string;
    roleArn?: string;
    tags?: Tag[];
}
