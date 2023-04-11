import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>.
 */
export declare class EksSecret extends SpeakeasyBase {
    optional?: boolean;
    secretName: string;
}
