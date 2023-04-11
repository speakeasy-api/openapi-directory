import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A map of key-value pairs containing the patterns that need to be replaced in a managed template job document schema. You can use the description of each key as a guidance to specify the inputs during runtime when creating a job.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note>
 */
export declare class DocumentParameter extends SpeakeasyBase {
    description?: string;
    example?: string;
    key?: string;
    optional?: boolean;
    regex?: string;
}
