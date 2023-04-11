import { SpeakeasyBase } from "../../../internal/utils";
/**
 * can be "deploy-key" or "github-user-key"
 *
 * @remarks
 *
 */
export declare enum KeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}
/**
 * checkout key
 */
export declare class Key extends SpeakeasyBase {
    fingerprint?: string;
    preferred?: boolean;
    publicKey?: string;
    /**
     * when the key was issued
     */
    time?: Date;
    /**
     * can be "deploy-key" or "github-user-key"
     *
     * @remarks
     *
     */
    type?: KeyTypeEnum;
}
