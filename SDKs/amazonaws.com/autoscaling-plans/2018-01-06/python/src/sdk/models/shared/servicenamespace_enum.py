import dataclasses
from enum import Enum

class ServiceNamespaceEnum(str, Enum):
    AUTOSCALING = "autoscaling"
    ECS = "ecs"
    EC2 = "ec2"
    RDS = "rds"
    DYNAMODB = "dynamodb"

