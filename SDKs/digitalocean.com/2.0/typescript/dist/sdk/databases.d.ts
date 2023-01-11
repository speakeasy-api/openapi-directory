import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Databases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addConnectionPool - Add a New Connection Pool (PostgreSQL)
     *
     * For PostgreSQL database clusters, connection pools can be used to allow a
     * database to share its idle connections. The popular PostgreSQL connection
     * pooling utility PgBouncer is used to provide this service. [See here for more information](https://www.digitalocean.com/docs/databases/postgresql/how-to/manage-connection-pools/)
     * about how and why to use PgBouncer connection pooling including
     * details about the available transaction modes.
     *
     * To add a new connection pool to a PostgreSQL database cluster, send a POST
     * request to `/v2/databases/$DATABASE_ID/pools` specifying a name for the pool,
     * the user to connect with, the database to connect to, as well as its desired
     * size and transaction mode.
     *
    **/
    addConnectionPool(req: operations.AddConnectionPoolRequest, config?: AxiosRequestConfig): Promise<operations.AddConnectionPoolResponse>;
    /**
     * addDatabase - Add a New Database
     *
     * To add a new database to an existing cluster, send a POST request to
     * `/v2/databases/$DATABASE_ID/dbs`.
     *
     * Note: Database management is not supported for Redis clusters.
     *
     * The response will be a JSON object with a key called `db`. The value of this will be
     * an object that contains the standard attributes associated with a database.
     *
    **/
    addDatabase(req: operations.AddDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.AddDatabaseResponse>;
    /**
     * addUser - Add a Database User
     *
     * To add a new database user, send a POST request to `/v2/databases/$DATABASE_ID/users`
     * with the desired username.
     *
     * Note: User management is not supported for Redis clusters.
     *
     * When adding a user to a MySQL cluster, additional options can be configured in the
     * `mysql_settings` object.
     *
     * The response will be a JSON object with a key called `user`. The value of this will be an
     * object that contains the standard attributes associated with a database user including
     * its randomly generated password.
     *
    **/
    addUser(req: operations.AddUserRequest, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * createDatabaseCluster - Create a New Database Cluster
     *
     * To create a database cluster, send a POST request to `/v2/databases`.
     * The response will be a JSON object with a key called `database`. The value of this will be an object that contains the standard attributes associated with a database cluster. The initial value of the database cluster's `status` attribute will be `creating`. When the cluster is ready to receive traffic, this will transition to `online`.
     * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster.
     * DigitalOcean managed PostgreSQL and MySQL database clusters take automated daily backups. To create a new database cluster based on a backup of an exising cluster, send a POST request to `/v2/databases`. In addition to the standard database cluster attributes, the JSON body must include a key named `backup_restore` with the name of the original database cluster and the timestamp of the backup to be restored.
     * Note: Backups are not supported for Redis clusters.
    **/
    createDatabaseCluster(req: operations.CreateDatabaseClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatabaseClusterResponse>;
    /**
     * createReplica - Create a Read-only Replica
     *
     * To create a read-only replica for a PostgreSQL or MySQL database cluster, send a POST request to `/v2/databases/$DATABASE_ID/replicas` specifying the name it should be given, the size of the node to be used, and the region where it will be located.
     * **Note**: Read-only replicas are not supported for Redis clusters.
     * The response will be a JSON object with a key called `replica`. The value of this will be an object that contains the standard attributes associated with a database replica. The initial value of the read-only replica's `status` attribute will be `forking`. When the replica is ready to receive traffic, this will transition to `active`.
    **/
    createReplica(req: operations.CreateReplicaRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicaResponseOutput>;
    /**
     * deleteConnectionPool - Delete a Connection Pool (PostgreSQL)
     *
     * To delete a specific connection pool for a PostgreSQL database cluster, send
     * a DELETE request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
    **/
    deleteConnectionPool(req: operations.DeleteConnectionPoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionPoolResponse>;
    /**
     * deleteDatabase - Delete a Database
     *
     * To delete a specific database, send a DELETE request to
     * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
     * Note: Database management is not supported for Redis clusters.
     *
    **/
    deleteDatabase(req: operations.DeleteDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatabaseResponse>;
    /**
     * deleteOnlineMigration - Stop an Online Migration
     *
     * To stop an online migration, send a DELETE request to `/v2/databases/$DATABASE_ID/online-migration/$MIGRATION_ID`.
     *
     * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
     *
    **/
    deleteOnlineMigration(req: operations.DeleteOnlineMigrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOnlineMigrationResponse>;
    /**
     * deleteUser - Remove a Database User
     *
     * To remove a specific database user, send a DELETE request to
     * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
     * Note: User management is not supported for Redis clusters.
     *
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * destroyCluster - Destroy a Database Cluster
     *
     * To destroy a specific database, send a DELETE request to `/v2/databases/$DATABASE_ID`.
     * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
    **/
    destroyCluster(req: operations.DestroyClusterRequest, config?: AxiosRequestConfig): Promise<operations.DestroyClusterResponse>;
    /**
     * destroyReplica - Destroy a Read-only Replica
     *
     * To destroy a specific read-only replica, send a DELETE request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
     * **Note**: Read-only replicas are not supported for Redis clusters.
     * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
    **/
    destroyReplica(req: operations.DestroyReplicaRequest, config?: AxiosRequestConfig): Promise<operations.DestroyReplicaResponse>;
    /**
     * getConnectionPool - Retrieve Existing Connection Pool (PostgreSQL)
     *
     * To show information about an existing connection pool for a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
     * The response will be a JSON object with a `pool` key.
    **/
    getConnectionPool(req: operations.GetConnectionPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionPoolResponse>;
    /**
     * getDatabase - Retrieve an Existing Database
     *
     * To show information about an existing database cluster, send a GET request to
     * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
     *
     * Note: Database management is not supported for Redis clusters.
     *
     * The response will be a JSON object with a `db` key. This will be set to an object
     * containing the standard database attributes.
     *
    **/
    getDatabase(req: operations.GetDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseResponse>;
    /**
     * getDatabaseCluster - Retrieve an Existing Database Cluster
     *
     * To show information about an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID`.
     * The response will be a JSON object with a database key. This will be set to an object containing the standard database cluster attributes.
     * The embedded connection and private_connection objects will contain the information needed to access the database cluster.
     * The embedded maintenance_window object will contain information about any scheduled maintenance for the database cluster.
    **/
    getDatabaseCluster(req: operations.GetDatabaseClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseClusterResponse>;
    /**
     * getEvictionPolicy - Retrieve the Eviction Policy for a Redis Cluster
     *
     * To retrieve the configured eviction policy for an existing Redis cluster, send a GET request to `/v2/databases/$DATABASE_ID/eviction_policy`.
     * The response will be a JSON object with an `eviction_policy` key. This will be set to a string representing the eviction policy.
    **/
    getEvictionPolicy(req: operations.GetEvictionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetEvictionPolicyResponse>;
    /**
     * getMigrationStatus - Retrieve the Status of an Online Migration
     *
     * To retrieve the status of an online migration, send a GET request to `/v2/databases/$DATABASE_ID/online-migration`. If a migration has completed, a 200 OK status is returned with no response body.
    **/
    getMigrationStatus(req: operations.GetMigrationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetMigrationStatusResponse>;
    /**
     * getReplica - Retrieve an Existing Read-only Replica
     *
     * To show information about an existing database replica, send a GET request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
     * **Note**: Read-only replicas are not supported for Redis clusters.
     * The response will be a JSON object with a `replica key`. This will be set to an object containing the standard database replica attributes.
    **/
    getReplica(req: operations.GetReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicaResponseOutput>;
    /**
     * getSqlMode - Retrieve the SQL Modes for a MySQL Cluster
     *
     * To retrieve the configured SQL modes for an existing MySQL cluster, send a GET request to `/v2/databases/$DATABASE_ID/sql_mode`.
     * The response will be a JSON object with a `sql_mode` key. This will be set to a string representing the configured SQL modes.
    **/
    getSqlMode(req: operations.GetSqlModeRequest, config?: AxiosRequestConfig): Promise<operations.GetSqlModeResponse>;
    /**
     * getUser - Retrieve an Existing Database User
     *
     * To show information about an existing database user, send a GET request to
     * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
     *
     * Note: User management is not supported for Redis clusters.
     *
     * The response will be a JSON object with a `user` key. This will be set to an object
     * containing the standard database user attributes.
     *
     * For MySQL clusters, additional options will be contained in the mysql_settings
     * object.
     *
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * listConnectionPools - List Connection Pools (PostgreSQL)
     *
     * To list all of the connection pools available to a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools`.
     * The result will be a JSON object with a `pools` key. This will be set to an array of connection pool objects.
    **/
    listConnectionPools(req: operations.ListConnectionPoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionPoolsResponse>;
    /**
     * listDatabaseBackups - List Backups for a Database Cluster
     *
     * To list all of the available backups of a PostgreSQL or MySQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/backups`.
     * **Note**: Backups are not supported for Redis clusters.
     * The result will be a JSON object with a `backups key`. This will be set to an array of backup objects, each of which will contain the size of the backup and the timestamp at which it was created.
    **/
    listDatabaseBackups(req: operations.ListDatabaseBackupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabaseBackupsResponse>;
    /**
     * listDatabaseClusters - List All Database Clusters
     *
     * To list all of the database clusters available on your account, send a GET request to `/v2/databases`. To limit the results to database clusters with a specific tag, include the `tag_name` query parameter set to the name of the tag. For example, `/v2/databases?tag_name=$TAG_NAME`.
     * The result will be a JSON object with a `databases` key. This will be set to an array of database objects, each of which will contain the standard database attributes.
     * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster:
     * The embedded `maintenance_window` object will contain information about any scheduled maintenance for the database cluster.
    **/
    listDatabaseClusters(req: operations.ListDatabaseClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabaseClustersResponse>;
    /**
     * listDatabaseFirewalls - List Firewall Rules (Trusted Sources) for a Database Cluster
     *
     * To list all of a database cluster's firewall rules (known as "trusted sources" in the control panel), send a GET request to `/v2/databases/$DATABASE_ID/firewall`.
     * The result will be a JSON object with a `rules` key.
    **/
    listDatabaseFirewalls(req: operations.ListDatabaseFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabaseFirewallsResponse>;
    /**
     * listDatabases - List All Databases
     *
     * To list all of the databases in a clusters, send a GET request to
     * `/v2/databases/$DATABASE_ID/dbs`.
     *
     * The result will be a JSON object with a `dbs` key. This will be set to an array
     * of database objects, each of which will contain the standard database attributes.
     *
     * Note: Database management is not supported for Redis clusters.
     *
    **/
    listDatabases(req: operations.ListDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabasesResponse>;
    /**
     * listReplicas - List All Read-only Replicas
     *
     * To list all of the read-only replicas associated with a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/replicas`.
     * **Note**: Read-only replicas are not supported for Redis clusters.
     * The result will be a JSON object with a `replicas` key. This will be set to an array of database replica objects, each of which will contain the standard database replica attributes.
    **/
    listReplicas(req: operations.ListReplicasRequest, config?: AxiosRequestConfig): Promise<operations.ListReplicasResponse>;
    /**
     * listUsers - List all Database Users
     *
     * To list all of the users for your database cluster, send a GET request to
     * `/v2/databases/$DATABASE_ID/users`.
     *
     * Note: User management is not supported for Redis clusters.
     *
     * The result will be a JSON object with a `users` key. This will be set to an array
     * of database user objects, each of which will contain the standard database user attributes.
     *
     * For MySQL clusters, additional options will be contained in the mysql_settings object.
     *
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * resetAuth - Reset a Database User's Password or Authentication Method
     *
     * To reset the password for a database user, send a POST request to
     * `/v2/databases/$DATABASE_ID/users/$USERNAME/reset_auth`.
     *
     * For `mysql` databases, the authentication method can be specifying by
     * including a key in the JSON body called `mysql_settings` with the `auth_plugin`
     * value specified.
     *
     * The response will be a JSON object with a `user` key. This will be set to an
     * object containing the standard database user attributes.
     *
    **/
    resetAuth(req: operations.ResetAuthRequest, config?: AxiosRequestConfig): Promise<operations.ResetAuthResponse>;
    /**
     * updateDatabaseCluster - Migrate a Database Cluster to a New Region
     *
     * To migrate a database cluster to a new region, send a `PUT` request to
     * `/v2/databases/$DATABASE_ID/migrate`. The body of the request must specify a
     * `region` attribute.
     *
     * A successful request will receive a 202 Accepted status code with no body in
     * response. Querying the database cluster will show that its `status` attribute
     * will now be set to `migrating`. This will transition back to `online` when the
     * migration has completed.
     *
    **/
    updateDatabaseCluster(req: operations.UpdateDatabaseClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatabaseClusterResponse>;
    /**
     * updateDatabaseClusterSize - Resize a Database Cluster
     *
     * To resize a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/resize`. The body of the request must specify both the size and num_nodes attributes.
     * A successful request will receive a 202 Accepted status code with no body in response. Querying the database cluster will show that its status attribute will now be set to resizing. This will transition back to online when the resize operation has completed.
    **/
    updateDatabaseClusterSize(req: operations.UpdateDatabaseClusterSizeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatabaseClusterSizeResponse>;
    /**
     * updateDatabaseFirewall - Update Firewall Rules (Trusted Sources) for a Database
     *
     * To update a database cluster's firewall rules (known as "trusted sources" in the control panel), send a PUT request to `/v2/databases/$DATABASE_ID/firewall` specifying which resources should be able to open connections to the database. You may limit connections to specific Droplets, Kubernetes clusters, or IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. The firewall is limited to 100 rules (or trusted sources). When possible, we recommend [placing your databases into a VPC network](https://www.digitalocean.com/docs/networking/vpc/) to limit access to them instead of using a firewall.
     * A successful
    **/
    updateDatabaseFirewall(req: operations.UpdateDatabaseFirewallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatabaseFirewallResponse>;
    /**
     * updateEvictionPolicy - Configure the Eviction Policy for a Redis Cluster
     *
     * To configure an eviction policy for an existing Redis cluster, send a PUT request to `/v2/databases/$DATABASE_ID/eviction_policy` specifying the desired policy.
    **/
    updateEvictionPolicy(req: operations.UpdateEvictionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEvictionPolicyResponse>;
    /**
     * updateMaintenanceWindow - Configure a Database Cluster's Maintenance Window
     *
     * To configure the window when automatic maintenance should be performed for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/maintenance`.
     * A successful request will receive a 204 No Content status code with no body in response.
    **/
    updateMaintenanceWindow(req: operations.UpdateMaintenanceWindowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMaintenanceWindowResponse>;
    /**
     * updateOnlineMigration - Start an Online Migration
     *
     * To start an online migration, send a PUT request to `/v2/databases/$DATABASE_ID/online-migration` endpoint. Migrating a cluster establishes a connection with an existing cluster and replicates its contents to the target cluster. Online migration is only available for PostgreSQL and Redis clusters.
    **/
    updateOnlineMigration(req: operations.UpdateOnlineMigrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOnlineMigrationResponse>;
    /**
     * updateSqlMode - Update SQL Mode for a Cluster
     *
     * To configure the SQL modes for an existing MySQL cluster, send a PUT request to `/v2/databases/$DATABASE_ID/sql_mode` specifying the desired modes. See the official MySQL 8 documentation for a [full list of supported SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-full).
     * A successful request will receive a 204 No Content status code with no body in response.
    **/
    updateSqlMode(req: operations.UpdateSqlModeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSqlModeResponse>;
}
