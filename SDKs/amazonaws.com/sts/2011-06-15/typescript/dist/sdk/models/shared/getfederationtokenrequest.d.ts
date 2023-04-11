import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescriptorType } from "./policydescriptortype";
import { Tag } from "./tag";
export declare class GetFederationTokenRequest extends SpeakeasyBase {
    durationSeconds?: number;
    name: string;
    policy?: string;
    policyArns?: PolicyDescriptorType[];
    tags?: Tag[];
}
