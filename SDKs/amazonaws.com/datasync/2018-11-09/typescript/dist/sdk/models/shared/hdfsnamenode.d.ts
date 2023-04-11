import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes.
 */
export declare class HdfsNameNode extends SpeakeasyBase {
    hostname: string;
    port: number;
}
