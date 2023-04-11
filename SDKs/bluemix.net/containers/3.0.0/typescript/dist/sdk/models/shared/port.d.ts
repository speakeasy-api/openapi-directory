import { SpeakeasyBase } from "../../../internal/utils";
export declare class Port extends SpeakeasyBase {
    /**
     * Public IP address that was bound to the container in IPv4 format.
     */
    ip?: string;
    /**
     * The private port of the container on which the container listens during run time.
     */
    privatePort?: string;
    /**
     * The public port that was exposed during container creation. When a public port is exposed, a public IP address can be bound to the container which makes the container accessible from the internet.
     */
    publicPort?: string;
    /**
     * The type of IP protocol that is used for the port. It can either be `udp` or `tcp`.
     */
    type?: string;
}
